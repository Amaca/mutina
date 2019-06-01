/* jshint esversion: 6 */
/* tweenmax & swiper needed */

import Fancy from './fancy';
import FancyTransition from "./fancy.transition";

let clickClose;

const body = document.querySelector('body');
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
            FancyTransition.closeLayer('fullGallery',fullGalleryBg, fullGalleryClose, fullGalleryWrapper, null, fullGallery);
            e.preventDefault();
        };
        fullGalleryClose.addEventListener('click', clickClose);

        document.body.appendChild(fullGallery);
        fullGallery.appendChild(fullGalleryClose);
        fullGallery.appendChild(fullGalleryBg);
        fullGallery.appendChild(fullGalleryWrapper);
        fullGalleryWrapper.appendChild(fullGalleryContainer);

        body.classList.add('full-gallery-open');
        FancyViewAll.addImages(fullGalleryContainer);

        FancyTransition.openLayer('fullGallery', fullGalleryBg, fullGalleryClose, fullGalleryWrapper, null, id);
    }

    static addImages(container) {
        let fancyImages = Fancy.getImages();
        let thumbItems = fancyImages.map((item) => {
            return {
                id: item.id,
                caption: item.caption,
                url: item.bigImageUrl
            };
        });

        let thumbHtml = '';
        thumbItems.forEach(thumb => {
            thumbHtml += `<div class="full-gallery__thumb"><img src="${thumb.url}" alt="${thumb.caption}"></div>`;
        });

        container.innerHTML = `<div class="full-gallery__list">${thumbHtml}</div>`;

    }
}