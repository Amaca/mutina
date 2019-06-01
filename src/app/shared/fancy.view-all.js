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
       
        fullGallery.classList.add('full-gallery');
        fullGalleryClose.classList.add('full-gallery__close');
        fullGalleryBg.classList.add('full-gallery__bg');

        fullGalleryClose.innerHTML = closeIcon;

        clickClose = (e) => {
            FancyTransition.closeLayer(fullGalleryBg, fullGalleryClose, null, null, fullGallery);
            e.preventDefault();
        };
        fullGalleryClose.addEventListener('click', clickClose);

        document.body.appendChild(fullGallery);
        fullGallery.appendChild(fullGalleryClose);
        fullGallery.appendChild(fullGalleryBg);

        FancyTransition.openLayer(fullGalleryBg, fullGalleryClose, null, null, id);
    }

}