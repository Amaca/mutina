/* jshint esversion: 6 */

import "gsap/ScrollToPlugin";
import FancyTransition from "./fancy.transition";
import SamplesDetail from "./samples.detail";

let clickClose;
let scrollWrapper;
let clickDetailGallery;

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const header = document.querySelector('header');
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;
const backIcon = `<svg><use xlink:href="#svg-grid3x3"></use></svg>`;

export default class Samples {

    constructor(node, index) {
        this.node = node;
        this.index = index;

        this.init();

    }

    init() {
        this.jsonUrl = this.node.getAttribute('data-samples');
        this.images = [];
        this.addListeners();
    }

    getData() {
        let req = new XMLHttpRequest();
        req.overrideMimeType("application/json");
        req.open('GET', this.jsonUrl, true);
        req.onload = () => {
            let jsonResponse = JSON.parse(req.responseText);
            this.data = jsonResponse;
            this.initFullSamplesGallery();
        };
        req.send(null);
    }

    initFullSamplesGallery() {
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
        fullSamplesHeaderCta.classList.add('full-samples-gallery__header-cta');
        fullSamplesHeaderButton.classList.add('full-samples-gallery__header-button');
        fullSamplesBg.classList.add('full-samples-gallery__bg');
        fullSamplesWrapper.classList.add('full-samples-gallery__wrapper');
        fullSamplesContainer.classList.add('full-samples-gallery__container');

        fullSamplesClose.innerHTML = closeIcon;
        fullSamplesBack.innerHTML = backIcon;

        clickClose = (e) => {
            FancyTransition.closeLayer('fullSamplesGallery', false, fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, null, fullSamplesGallery);
            fullSamplesClose.removeEventListener('click', clickClose);
            e.preventDefault();
        };
        fullSamplesClose.addEventListener('click', clickClose);

        document.body.appendChild(fullSamplesGallery);
        fullSamplesGallery.appendChild(fullSamplesHeader);
        fullSamplesHeader.appendChild(fullSamplesClose);
        fullSamplesHeader.appendChild(fullSamplesBack);
        fullSamplesHeader.appendChild(fullSamplesCat);
        fullSamplesHeader.appendChild(fullSamplesHeaderCta);
        fullSamplesHeaderCta.appendChild(fullSamplesHeaderButton);
        fullSamplesGallery.appendChild(fullSamplesBg);
        fullSamplesGallery.appendChild(fullSamplesWrapper);
        fullSamplesWrapper.appendChild(fullSamplesContainer);

        fullSamplesHeaderButton.innerHTML = 'Samples (0)';

        body.classList.add('samples-gallery-open');
        html.style.overflow = 'hidden';

        scrollWrapper = (e) => {
            this.scrollWrapper(e);
        };

        fullSamplesWrapper.addEventListener('scroll', scrollWrapper);

        this.addCategories(fullSamplesCat);
        this.addImages(fullSamplesContainer);

        FancyTransition.openLayer('fullSamplesGallery', fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, null, this.id);

        //https://gomakethings.com/how-to-update-a-url-without-reloading-the-page-using-vanilla-javascript/
    }

    addCategories(wrapper) {
        let categoriesHtml = '<ul>';
        this.data.samples.forEach(category => {
            categoriesHtml += `
                <li><a href="#" data-sample-id="${category.id}">${category.color}</a></li>
            `;
        });
        categoriesHtml += '</ul>';
        wrapper.innerHTML = categoriesHtml;

        Samples.addTabsListeners();
    }

    scrollWrapper(e) {
        const wrapper = document.querySelector('.full-samples-gallery__wrapper');
    }

    addImages(wrapper) {

        let containerHtml = '';

        this.data.samples.forEach(category => {
            let fullSamplesHtml = '';
            category.items.forEach(item => {
                fullSamplesHtml += `
                    <div class="full-samples-gallery__item">
                        <div class="img">
                            <img src="${item.img}" alt="${item.title}" data-sample-detail="${item.id}">
                        </div>
                        <div class="box">
                            <h6 class="h6">${item.title}</h6>
                            <div class="text">${item.size}</div>
                            <div class="cta"><a href="#" class="btn--inline">Add to samples</a></div>
                        </div>
                    </div>
                `;
            });

            containerHtml += `
            <div class="full-samples-gallery__category" data-sample-category="${category.id}">
                <div class="full-samples-gallery__cover">
                    <h2 class="h2">${category.color}</h2>
                    <div class="img">
                        <img src="${category.img}">
                    </div>
                    <div class="box">
                        <h6 class="h6">${category.title}</h6>
                        <div class="text">${category.size}</div>
                    </div>
                </div>
                <div class="full-samples-gallery__listing">
                    ${fullSamplesHtml}                    
                </div>
            </div>
        `;
        });

        wrapper.innerHTML = containerHtml;
        const images = this.mapData();

        clickDetailGallery = (e) => {
            this.openDetailGallery(e, images);
        };

        images.forEach(image => {
            image.node.addEventListener('click', clickDetailGallery);
        });
    }

    openDetailGallery(e, images) {
        const wrapper = document.querySelector('.full-samples-gallery');
        SamplesDetail.init(e, images, wrapper);
        Samples.removeTabsListeners();
    }

    mapData() {
        const thumbs = [...document.querySelectorAll('.full-samples-gallery__item')];
        const thumbsList = this.data.samples.map(category => {
            let categoryItems = [];
            category.items.forEach((item, index) => {
                categoryItems.push({
                    id: item.id,
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

    addListeners() {
        const click = (e) => {
            this.getData();
            e.preventDefault();
        };
        this.click = click;
        this.node.addEventListener('click', this.click);
    }

    destroy() {
        this.node.removeEventListener('click', this.click);

        if (document.querySelector('full-samples-gallery__wrapper')) {
            document.querySelector('full-samples-gallery__wrapper').removeEventListener('scroll', scrollWrapper);
        }
    }


    static scrollToColor(e) {
        const id = e.target.getAttribute('data-sample-id');
        const wrapper = document.querySelector('.full-samples-gallery__wrapper');
        const category = [...wrapper.querySelectorAll('[data-sample-category]')].find(x => {
            return x.attributes[1].value === id;
        });
        TweenMax.to(wrapper, 0.8, {
            scrollTo: {
                y: category.offsetTop,
                offsetY: 36,
                ease: Expo.easeInOut
            }
        });

        //Utils.toggleClass(e.target, 'active');
        e.preventDefault();
    }

    static removeTabsListeners() {
        [...document.querySelectorAll('[data-sample-id]')].forEach(x => {
            x.removeEventListener('click', this.scrollToColor);
        });
    }

    static addTabsListeners() {
        [...document.querySelectorAll('[data-sample-id]')].forEach(x => {
            x.addEventListener('click', this.scrollToColor);
        });
    }

    static destroyAll() {
        if (Samples.items) {
            Samples.items.forEach(sample => {
                sample.destroy();
            });
        }
        Samples.removeTabsListeners();
    }

    static init() {
        Samples.items = [...document.querySelectorAll('[data-samples]')].map((element, id) => new Samples(element, id));
        console.log('Samples: ', Samples.items);
    }
}