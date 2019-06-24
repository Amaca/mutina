/* jshint esversion: 6 */

import Utils from './utils';

const body = document.querySelector('body');
let subFiltersOpen = false;

export default class Filters {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.parents = [...node.querySelectorAll('.filters__panel-parent')];
        Filters.initFilters(this.parents);
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
    }

    static init() {
        Filters.items = [...document.querySelectorAll('[data-filters]')].map((element, id) => new Filters(element, id));
        console.log('Filters: ', Filters.items);
    }
}