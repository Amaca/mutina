/* jshint esversion: 6 */

import "gsap/ScrollToPlugin";
import Dom from './dom';
import FancyTransition from "./fancy.transition";
import Follower from "./follower";
import LazyLoad from "./lazyload";
import SamplesDetail from "./samples.detail";
import SidePanel from "./side.panel";
import Wishlist from "./wishlist";

export class CategoryItem {

    constructor(index, data, parent, target, wrapper) {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        this.index = index;
        this.data = data;
        this.id = data.id;
        this.name = data.title;
        this.target = target;
        this.wrapper = wrapper;
        this.offset = this.getOffset();
        // debug__(this.offset);
        listItem.className = 'category anchor-' + this.name.replace(/[^\w\s]/g, '').toLowerCase();
        parent.appendChild(listItem);
        anchor.textContent = this.name;
        anchor.className = 'scroll-to-' + this.id;
        anchor.setAttribute('href', '#');
        listItem.appendChild(anchor);
        this.anchor = anchor;
        this.onClick = this.onClick.bind(this);
        this.addListeners();
        CategoryItem.disabled = false;
    }

    getOffset() {
        return this.target.getBoundingClientRect().top + Dom.scrollPosition(this.wrapper);
    }

    onClick(e) {
        if (!CategoryItem.disabled) {
            const offsetTop = this.getOffset() - Samples.getGutter() + 1; // this.wrapper.scrollTo(0, this.getOffset() - Samples.getGutter() + 1);
            TweenMax.to(this.wrapper, 0.8, {
                scrollTo: {
                    y: offsetTop,
                    // offsetY: Samples.getGutter() + 1,
                    ease: Expo.easeInOut
                }
            });
            e.preventDefault();
        }
    }

    addListeners() {
        this.anchor.addEventListener('click', this.onClick);
    }

    removeListeners() {
        this.anchor.removeEventListener('click', this.onClick);
    }

    destroy() {
        this.removeListeners();
    }

}

let clickClose;
let scrollWrapper;
let clickDetailGallery;

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const header = document.querySelector('header');
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;
const backIcon = `<svg><use xlink:href="#svg-grid3x3"></use></svg>`;
let sidePanelButton;

export default class Samples {

    constructor(node, index) {
        this.node = node;
        this.index = index;
        this.jsonUrl = this.node.getAttribute('data-samples');
        this.images = [];
        this.categories = [];
        this.onClick = this.onClick.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDetail = this.onClickDetail.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.addListeners();
    }

    createSampleGallery() {
        let fullSamplesGallery = document.createElement('div');
        let fullSamplesHeader = document.createElement('div');
        let fullSamplesClose = document.createElement('div');
        let fullSamplesBack = document.createElement('div');
        let fullSamplesCat = document.createElement('div');
        let fullSamplesHeaderCta = document.createElement('div');
        let fullSamplesHeaderButton = document.createElement('div');
        let fullSamplesBg = document.createElement('div');
        let fullSamplesWrapper = document.createElement('div');
        let fullSamplesContainer = document.createElement('div');
        fullSamplesGallery.classList.add('full-samples-gallery');
        fullSamplesHeader.classList.add('full-samples-gallery__header');
        fullSamplesClose.classList.add('full-samples-gallery__close');
        fullSamplesBack.classList.add('full-samples-gallery__back');
        fullSamplesCat.classList.add('full-samples-gallery__header-cat');
        //fullSamplesHeaderCta.classList.add('full-samples-gallery__header-cta');
        fullSamplesHeaderButton.classList.add('full-samples-gallery__header-button');
        fullSamplesBg.classList.add('full-samples-gallery__bg');
        fullSamplesWrapper.classList.add('full-samples-gallery__wrapper');
        fullSamplesContainer.classList.add('full-samples-gallery__container');
        fullSamplesClose.innerHTML = closeIcon;
        fullSamplesBack.innerHTML = backIcon;
        document.body.appendChild(fullSamplesGallery);
        fullSamplesGallery.appendChild(fullSamplesHeader);
        fullSamplesHeader.appendChild(fullSamplesClose);
        fullSamplesHeader.appendChild(fullSamplesBack);
        fullSamplesHeader.appendChild(fullSamplesCat);
        //fullSamplesHeader.appendChild(fullSamplesHeaderCta);
        //fullSamplesHeaderCta.appendChild(fullSamplesHeaderButton);
        fullSamplesGallery.appendChild(fullSamplesBg);
        fullSamplesGallery.appendChild(fullSamplesWrapper);
        fullSamplesWrapper.appendChild(fullSamplesContainer);
        fullSamplesHeaderButton.innerHTML = ''; //`Samples (<span data-wishcount>0</span>)`;
        sidePanelButton = new SidePanel(fullSamplesHeaderButton, null, 'samples');
        body.classList.add('samples-gallery-open');
        if (Dom.fastscroll) {
            body.style.cssText = 'overflow: hidden;';
        } else {
            html.style.cssText = 'overflow: hidden;';
        }
        this.addImages(fullSamplesContainer);
        this.addCategories(fullSamplesCat, fullSamplesContainer, fullSamplesWrapper);
        FancyTransition.openLayer('fullSamplesGallery', fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, null, this.id, () => {
            this.addSampleGalleryListeners();
            this.onScroll();
        });
    }

    addImages(wrapper) {
        let containerHtml = '';
        this.data.samples.forEach(category => {
            let fullSamplesHtml = '';
            category.items.forEach(item => {
                fullSamplesHtml += `
                    <div class="full-samples-gallery__item">
                        <div class="img">
                            <img data-load="${item.img}" alt="${item.title}" data-sample-detail="${item.id}">
                        </div>
                        <div class="box">
                            <h6 class="h6">${item.title}</h6>
                            <div class="text">${item.size}</div>
                            <!--div class="cta"><div class="btn--inline" data-wishid="${item.code}">Add to samples</div></div-->
                        </div>
                    </div>
                `;
            });
            containerHtml += `<div class="full-samples-gallery__category" data-scroll-area="${category.id}" data-sample-category="${category.id}">`;
            if (category.img && category.img !== null) {
                containerHtml += `
                <div class="full-samples-gallery__cover">
                    <h2 class="h2">${category.color}</h2>
                    <div class="img">
                        <img data-load="${category.img}">
                    </div>
                    <div class="box"> 
                        <h6 class="h6">${category.title}</h6>
                        <div class="text">${category.size}</div>
                    </div>
                </div>`;
            }
            containerHtml += `<div class="full-samples-gallery__listing">${fullSamplesHtml}</div></div>`;
        });
        wrapper.innerHTML = containerHtml;
        LazyLoad.init();
        const images = this.getSampleImages();
        this.images = images;
    }

    getSampleImages() {
        const thumbs = [...document.querySelectorAll('.full-samples-gallery__item')];
        const thumbsList = this.data.samples.map(category => {
            let categoryItems = [];
            category.items.forEach((item, index) => {
                categoryItems.push({
                    id: item.id,
                    code: item.code,
                    node: thumbs[item.id],
                    img: item.img,
                    imgHd: item.imgHd,
                    size: item.size,
                    title: item.title,
                    categoryId: category.id,
                    parent: index === 0 ? true : false
                });
            });
            return categoryItems;
        });
        let flat = [];
        for (let i = 0; i < thumbsList.length; i++) {
            flat = flat.concat(thumbsList[i]);
        }
        return flat;
    }

    addCategories(fullSamplesCat, fullSamplesContainer, fullSamplesWrapper) {
        /*
        let categoriesHtml = '<ul>';
        this.data.samples.forEach(category => {
            categoriesHtml += `
                <li><div data-sample-id="${category.id}">${category.title}</div></li>
            `;
        });
        categoriesHtml += '</ul>';
        fullSamplesCat.innerHTML = categoriesHtml;
        Samples.addTabsListeners();
        */
        const ul = document.createElement('ul');
        fullSamplesCat.appendChild(ul);
        this.categories = [...fullSamplesContainer.querySelectorAll('.full-samples-gallery__category')].map((element, index) => new CategoryItem(index, this.data.samples[index], ul, element, fullSamplesWrapper));
    }

    onClick(e) {
        let req = new XMLHttpRequest();
        req.overrideMimeType("application/json");
        req.open('GET', this.jsonUrl, true);
        req.onload = () => {
            let jsonResponse = JSON.parse(req.responseText);
            this.data = jsonResponse;
            this.createSampleGallery();
            Wishlist.init();
        };
        req.send(null);
        e.preventDefault();
    }

    onClickClose(e) {
        const fullSamplesBg = document.querySelector('.full-samples-gallery__bg');
        const fullSamplesClose = document.querySelector('.full-samples-gallery__close');
        const fullSamplesWrapper = document.querySelector('.full-samples-gallery__wrapper');
        const fullSamplesHeader = document.querySelector('.full-samples-gallery__header');
        const fullSamplesGallery = document.querySelector('.full-samples-gallery');
        FancyTransition.closeLayer('fullSamplesGallery', false, fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, null, fullSamplesGallery);
        this.removeSampleGalleryListeners();
        e.preventDefault();
    }

    onClickDetail(e) {
        const wrapper = document.querySelector('.full-samples-gallery');
        SamplesDetail.init(e, this.images, wrapper);
        CategoryItem.disabled = true;
        // Samples.removeTabsListeners();
        e.preventDefault();
    }

    onSamplesDetailDidClose() {
        CategoryItem.disabled = false;
    }

    onScroll() {
        const categories = this.categories;
        if (categories.length) {
            const selectedCategory = categories.find((x, i) => {
                const top = x.target.getBoundingClientRect().top;
                const bottom = i < categories.length - 1 ? categories[i + 1].target.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
                if ((top < Samples.getGutter() || i === 0) && bottom > Samples.getGutter()) {
                    x.anchor.classList.add('active');
                    return x;
                }
            });
            if (this.currentCategory_ !== selectedCategory) {
                this.currentCategory_ = selectedCategory;
                categories.forEach((x) => {
                    if (x === selectedCategory) {
                        x.anchor.classList.add('active');
                    } else {
                        x.anchor.classList.remove('active');
                    }
                });
            }
            if (typeof Samples.onScroll === 'function' && Dom.fastscroll) {
                Samples.onScroll();
            }
        }
    }

    addListeners() {
        this.node.addEventListener('click', this.onClick);
    }

    removeListeners() {
        this.node.removeEventListener('click', this.onClick);
    }

    setTrackHistory(samples) {
        if (!window.NoTrackHistory) {
            history.pushState({
                samples: samples
            }, null, location.pathname + (samples ? '?samples=open' : ''));
        }
        window.NoTrackHistory = false;
    }

    addSampleGalleryListeners() {
        this.setTrackHistory(true);
        const imagesSamples = [...document.querySelectorAll('.full-samples-gallery__item img')];
        Follower.addMouseListener(imagesSamples);
        const fullSamplesClose = document.querySelector('.full-samples-gallery__close');
        fullSamplesClose.addEventListener('click', this.onClickClose);
        const fullSamplesWrapper = document.querySelector('.full-samples-gallery__wrapper');
        fullSamplesWrapper.addEventListener('scroll', this.onScroll);
        this.images.forEach(image => {
            image.node.querySelector('.img').addEventListener('click', this.onClickDetail);
        });
    }

    removeSampleGalleryListeners() {
        this.setTrackHistory(false);
        const imagesSamples = [...document.querySelectorAll('.full-samples-gallery__item img')];
        Follower.removeMouseListener(imagesSamples);
        /*
        if (typeof Samples.onScroll === 'function' && Dom.fastscroll) {
            document.querySelector('.full-samples-gallery__wrapper').removeEventListener('scroll', Samples.onScroll);
        }
        */
        const fullSamplesClose = document.querySelector('.full-samples-gallery__close');
        if (fullSamplesClose) {
            fullSamplesClose.removeEventListener('click', this.onClickClose);
        }
        const fullSamplesWrapper = document.querySelector('.full-samples-gallery__wrapper');
        if (fullSamplesWrapper) {
            fullSamplesWrapper.removeEventListener('click', this.onScroll);
        }
        this.images.forEach(image => {
            image.node.querySelector('.img').removeEventListener('click', this.onClickDetail);
        });
        this.categories.forEach(x => x.destroy());
    }

    destroy() {
        this.removeListeners();
        this.removeSampleGalleryListeners();
        this.images = [];
        this.categories = [];
    }

    static getGutter() {
        return window.innerWidth > 768 ? 100 : 100;
    }

    static destroyAll() {
        Samples.items.forEach(x => x.destroy());
    }

    static init() {
        Samples.items = [...document.querySelectorAll('[data-samples]')].map((element, id) => new Samples(element, id));
        debug__('Samples: ', Samples.items);
    }

    static onSamplesDetailDidClose() {
        Samples.items.forEach(x => x.onSamplesDetailDidClose());
    }

}

Samples.items = [];