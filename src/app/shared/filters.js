/* jshint esversion: 6 */

import Utils from './utils';
import LazyLoad from './lazyload';
import Appears from './appears';
import { setTimeout } from 'timers';
import Follower from './follower';

const body = document.querySelector('body');
let subFiltersOpen = false;

export default class Filters {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.parents = [...node.querySelectorAll('.filters__panel-parent')];
        Filters.initFilters(this.parents);
        this.products = _products;
        this.productsFiltered = _products;
        this.productsFounded = _products.length;
        this.page = 1;
        this.elementsInPage = 10;
        this.filter = typeof _filter !== 'undefined' ? _filter : {};
        this.containerListDOM = document.querySelector(".archive .listing");
        this.containerTagDOM = document.querySelector(".archive .listing-tag");
        this.loadMoreDOM = document.querySelector("#loadmore-prods");
        this.tags = this.initTags();

        this.setFilterHandler = this.setFilter.bind(this);
        this.incrementPageHandler = this.incrementPage.bind(this);
        this.resetHandler = this.reset.bind(this);

        this.filterProducts();
    }

    initTags() {
        var tt = [];
        var fl = this.filter;
        if (this.filter && Object.keys(this.filter).length > 0) {
            Object.keys(fl).forEach(function (prop) {
                fl[prop].forEach(function (v) {
                    var el = document.querySelector('[data-name="' + prop + '"][data-value="' + v + '"]');
                    if (el) {
                        tt.push({ name: prop, val: v, desc: el.attributes["data-desc"].value });
                    }
                });
            });
        }
        return tt;
    }

    filterProducts() {
        var filtered = [];
        var filter = this.filter;
        if (Object.keys(filter).length) {
            this.productsFounded = 0;
            this.products.forEach(p => {
                var props = Object.keys(this.filter);
                var ok = true;
                for (var i = 0; i < props.length; i++) {
                    var f = props[i];
                    if (filter[f].filter(fv => !p[f] || (fv !== p[f] && p[f].indexOf(',' + fv + ',') === -1)).length == filter[f].length) {
                        ok = false && ok;
                    }
                }
                if (ok) this.productsFounded++;
                if (ok && filtered.length < this.page * this.elementsInPage) filtered.push(p);
            })
        }
        else {
            filtered = [...this.products].slice(0, this.page * this.elementsInPage);
            this.productsFounded = _products.length;
        }
        this.productsFiltered = filtered;
        this.buildHtml();
    }

    setFilter(e) {
        var k = e.currentTarget.attributes["data-name"].value;
        var v = e.currentTarget.attributes["data-value"].value;

        if (this.filter[k] !== undefined && this.filter[k].indexOf(v) !== -1) {
            this.filter[k] = this.filter[k].filter(x => x !== v);
            if (this.filter[k].length == 0) delete this.filter[k];
            this.tags = this.tags.filter(x => x.name !== k || x.val !== v);
        } else {
            var d = e.currentTarget.attributes["data-desc"].value;
            if (!this.filter[k]) this.filter[k] = [];
            this.filter[k].push(v);
            if (this.tags.find(x => x.val === v) === undefined) {
                this.tags.push({ name: k, val: v, desc: d });
            }
        };
        this.filterProducts();
        e.preventDefault();
    };

    incrementPage(e) {
        this.page++;
        this.filterProducts();
        e.preventDefault();
    };

    reset(e) {
        this.filter = {};
        this.tags = [];
        this.page = 1;
        this.filterProducts();
        e.preventDefault();
    }

    buildHtml() {

        var template = Handlebars.compile(document.getElementById("list-item-template").innerHTML);
        var data = {};
        data.items = this.productsFiltered;
        data.filter = this.filter && Object.keys(this.filter).length > 0 ? '?f=' + JSON.stringify(this.filter) : '';
        data.collectionId = this.filter.collections ? this.filter.collections[0] : null;
        this.containerListDOM.innerHTML = template(data);

        template = Handlebars.compile(document.getElementById("list-tag-template").innerHTML);
        this.containerTagDOM.innerHTML = template({ items: this.tags });

        if (this.productsFounded > this.page * this.elementsInPage) {
            this.loadMoreDOM.style.display = 'block';
        } else {
            this.loadMoreDOM.style.display = 'none';
        }

        LazyLoad.init();
        Appears.init();
        Follower.addMouseListener([...document.querySelectorAll('.listing-follower .picture__container img')]);

        document.querySelectorAll('.subfilters__wrapper a')
            .forEach((el) => el.addEventListener('click', this.setFilterHandler));

        document.querySelectorAll('.filters__tags-item')
            .forEach((el) => el.addEventListener('click', this.setFilterHandler));

        document.querySelector('#loadmore-prods').addEventListener('click', this.incrementPageHandler);

        if (document.querySelector('.filters__tags-clear')) {
            document.querySelector('.filters__tags-clear')
                .addEventListener('click', this.resetHandler);
        }
    }

    static initFilters(parents) {
        //this.onClick = this.onClick.bind(this);
        parents.forEach(parent => {
            parent.addEventListener('click', this.onClick);
        });
    }

    static onClick(e) {
        const closeFiltersSlow = getComputedStyle(document.documentElement).getPropertyValue('--close-filters-speed');
        const closeFiltersFast = 400;
        const parent = e.currentTarget;
        const activeFilters = Utils.getClosest(event.target, 'ul li'); //seleziono ul li attiva appena cliccata
        const subFiltersItemHeight = activeFilters.querySelector('.subfilters__item').clientHeight;
        const height = activeFilters.querySelector('.subfilters__wrapper').clientHeight + 'px';
        const thisParent = parent.parentNode;
        const archive = document.querySelector('.archive');
        if (!subFiltersOpen) { //se i sottomenu sono chiusi
            document.documentElement.style.setProperty('--close-filters-speed', closeFiltersSlow);
            body.classList.add('filters-open');
            thisParent.classList.add('active');
            archive.style.paddingTop = height;
            activeFilters.querySelector('.subfilters').style.height = height;
            activeFilters.querySelector('.subfilters__wrapper').style.top = (subFiltersItemHeight / 4) + 'px';
            subFiltersOpen = true;
        } else {
            if (thisParent.classList.contains('active')) { //se un sottomenu è da aprire, verifico prima se ho gia aperto un sottomenu
                document.documentElement.style.setProperty('--close-filters-speed', closeFiltersSlow);
                body.classList.remove('filters-open');
                archive.style.paddingTop = 0;
                document.querySelectorAll('.subfilters').forEach(x => x.style.height = '0');
                document.querySelectorAll('.filters__panel ul li.active').forEach(x => x.classList.remove('active'));
                subFiltersOpen = false;
            } else { //un sottomenu è stato già aperto
                document.documentElement.style.setProperty('--close-filters-speed', closeFiltersFast + 'ms');
                document.querySelectorAll('.subfilters').forEach(x => x.style.height = '0');
                document.querySelectorAll('.filters__panel ul li.active').forEach(x => x.classList.remove('active'));
                setTimeout(x => { //timeout per definite l'animazione di chiusura del sottomenu gia aperto per mostrare il successivo
                    body.classList.add('filters-open');
                    thisParent.classList.add('active');
                    archive.style.paddingTop = height;
                    activeFilters.querySelector('.subfilters').style.height = height;
                    activeFilters.querySelector('.subfilters__wrapper').style.top = (subFiltersItemHeight / 4) + 'px';
                    document.documentElement.style.setProperty('--close-filters-speed', closeFiltersSlow);

                }, closeFiltersFast);
                subFiltersOpen = true;
            }
        }
        e.preventDefault();
    }

    static closeFilters(delay) { //chiudo il sottomenu
        if (body.classList.contains('filters-open')) {
            if (delay) {
                document.documentElement.style.setProperty('--close-filters-speed', delay + 'ms');
            }
            body.classList.remove('filters-open');
            document.querySelectorAll('.filters__panel ul li').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.subfilters').forEach(x => x.style.height = '0');
            subFiltersOpen = false;
        }
    }

    static destroyAll() {
        this.closeFilters(0);
        [...document.querySelectorAll('.filters__panel-parent')].forEach(x => {
            x.removeEventListener('click', this.onClick);
        });
        [...document.querySelectorAll('.subfilters__wrapper a')].forEach(x => {
            x.removeEventListener('click', this.setFilterHandler);
        });
        [...document.querySelectorAll('.filters__tags-item')].forEach(x => {
            x.removeEventListener('click', this.setFilterHandler);
        });
        [...document.querySelectorAll('.filters__tags-clear')].forEach(x => {
            x.removeEventListener('click', this.setFilterHandler);
        });

        Follower.removeMouseListener([...document.querySelectorAll('.listing-follower .picture__container img')]);
    }

    static init(debug) {
        Handlebars.registerHelper('imageCollection', function (collection, highlight, collectionId) {
            var nameProp = 'i' + (highlight ? '2' : '1') + (collectionId ? '-' + collectionId : '');
            if (collectionId && collection[nameProp]) return collection[nameProp];
            return collection['i' + (highlight ? '2' : '1')];
        });
        Filters.items = [...document.querySelectorAll('[data-filters]')].map((element, id) => new Filters(element, id));
        if (debug) {
            console.log('Filters: ', Filters.items);
        }
    }

}
