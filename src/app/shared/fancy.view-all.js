/* jshint esversion: 6 */
/* tweenmax & swiper needed */

import Fancy from './fancy';
import FancyTransition from "./fancy.transition";

let clickClose;

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;
const slideAnimationSpeed = 1000;

export default class FancyViewAll {

    constructor(node, id) {
        this.node = node;
        this.id = id;


        this.addListener();
    }

    addListener() {
        const click = (e) => {
            this.openFullGallery();
            e.preventDefault();
        };
        this.click = click;
        this.node.addEventListener('click', this.click);
    }

    openFullGallery() {
        FancyViewAll.initFullGallery(this.id);
    }

    destroy() {
        this.node.removeEventListener('click', this.click);
    }

    //INIT
    static init() {
        FancyViewAll.items = [...document.querySelectorAll('[data-fancy-view-all]')].map((element, id) => new FancyViewAll(element, id));
        console.log('FancyViewAll: ', FancyViewAll.items);
    }

    //DESTROY ALL NODES AND CREATED CONTAINER ELEMENTS
    static destroyAll() {
        FancyViewAll.items.forEach(node => {
            node.destroy();
        });
        [...document.querySelectorAll('.full-gallery__thumb')].forEach(thumb => thumb.removeEventListener('click', FancyViewAll.onThumbClick));
    }

    //CREATE MARKUP FOR FULL GALLERY AND ADD CLOSE LISTENER
    static initFullGallery(id) {
        let fullGallery = document.createElement('div');
        let fullGalleryClose = document.createElement('div');
        let fullGalleryBg = document.createElement('div');
        let fullGalleryWrapper = document.createElement('div');
        let fullGalleryContainer = document.createElement('div');

        fullGallery.classList.add('full-gallery');
        fullGalleryClose.classList.add('full-gallery__close');
        fullGalleryBg.classList.add('full-gallery__bg');
        fullGalleryWrapper.classList.add('full-gallery__wrapper');
        fullGalleryContainer.classList.add('full-gallery__container');

        fullGalleryClose.innerHTML = closeIcon;

        clickClose = (e) => {
            FancyTransition.closeLayer('fullGallery', false, fullGalleryBg, fullGalleryClose, fullGalleryWrapper, null, null, fullGallery);
            e.preventDefault();
        };
        fullGalleryClose.addEventListener('click', clickClose);

        document.body.appendChild(fullGallery);
        fullGallery.appendChild(fullGalleryClose);
        fullGallery.appendChild(fullGalleryBg);
        fullGallery.appendChild(fullGalleryWrapper);
        fullGalleryWrapper.appendChild(fullGalleryContainer);

        body.classList.add('full-gallery-open');
        html.style.overflow = 'hidden';
        FancyViewAll.addImages(fullGalleryContainer);


        FancyTransition.openLayer('fullGallery', fullGalleryBg, fullGalleryClose, fullGalleryWrapper, null, null, id);
    }

    static addImages(container) {
        const fancyImages = Fancy.getImages();

        let thumbItems = fancyImages.map((item) => {
            return {
                id: item.id,
                caption: item.caption,
                url: item.bigImageUrl,
                html: `<div class="full-gallery__thumb" data-index="${item.id}"><img src="${item.smallImageUrl}" alt="${item.caption}"></div>`
            };
        });

        let thumbHtml = '';
        thumbItems.forEach(thumb => {
            thumbHtml += thumb.html;
        });


        container.innerHTML = `<div class="full-gallery__list">${thumbHtml}</div>`;

        [...container.querySelectorAll('.full-gallery__thumb')].forEach(thumb => thumb.addEventListener('click', FancyViewAll.onThumbClick));

    }

    static onThumbClick(event) {
        const index = this.getAttribute('data-index');
        Fancy.initDetailGallery(index);
    }
}