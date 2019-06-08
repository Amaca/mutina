/* jshint esversion: 6 */

import FancyTransition from "./fancy.transition";
import "gsap/ScrollToPlugin";
import Utils from "./utils";

let clickClose;

const body = document.querySelector('body');
const header = document.querySelector('header');
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;

export default class Samples {

    constructor(node, index) {
        this.node = node;
        this.index = index;
        this.jsonUrl = node.getAttribute('data-samples');

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
        let fullSamplesCat = document.createElement('div');
        let fullSamplesHeaderCta = document.createElement('div');
        let fullSamplesHeaderButton = document.createElement('div');
        let fullSamplesBg = document.createElement('div');
        let fullSamplesWrapper = document.createElement('div');
        let fullSamplesContainer = document.createElement('div');

        fullSamplesGallery.classList.add('full-samples-gallery');
        fullSamplesHeader.classList.add('full-samples-gallery__header');
        fullSamplesClose.classList.add('full-samples-gallery__close');
        fullSamplesCat.classList.add('full-samples-gallery__header-cat');
        fullSamplesHeaderCta.classList.add('full-samples-gallery__header-cta');
        fullSamplesHeaderButton.classList.add('full-samples-gallery__header-button');
        fullSamplesBg.classList.add('full-samples-gallery__bg');
        fullSamplesWrapper.classList.add('full-samples-gallery__wrapper');
        fullSamplesContainer.classList.add('full-samples-gallery__container');

        fullSamplesClose.innerHTML = closeIcon;

        clickClose = (e) => {
            FancyTransition.closeLayer('fullSamplesGallery', false, fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, null, fullSamplesGallery);
            e.preventDefault();
        };
        fullSamplesClose.addEventListener('click', clickClose);

        document.body.appendChild(fullSamplesGallery);
        fullSamplesGallery.appendChild(fullSamplesHeader);
        fullSamplesHeader.appendChild(fullSamplesClose);
        fullSamplesHeader.appendChild(fullSamplesCat);
        fullSamplesHeader.appendChild(fullSamplesHeaderCta);
        fullSamplesHeaderCta.appendChild(fullSamplesHeaderButton);
        fullSamplesGallery.appendChild(fullSamplesBg);
        fullSamplesGallery.appendChild(fullSamplesWrapper);
        fullSamplesWrapper.appendChild(fullSamplesContainer);

        fullSamplesHeaderButton.innerHTML = 'Samples (0)';
        
        body.classList.add('samples-gallery-open');

        this.addCategories(fullSamplesCat);
        this.addImages(fullSamplesContainer);

        FancyTransition.openLayer('fullSamplesGallery', fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, null, this.id);

        // history.pushState({
        //     id: 'fullsamplesgallery'
        // }, 'Full Samples Gallery | Mutina', 'http://localhost:9999/prodotto.html?p=homepage');
        // window.addEventListener('popstate', function (event) {
        //     console.log(event);
        //     if (event.state && event.state.id === 'fullsamplesgallery') {
        //         FancyTransition.closeLayer('fullGallery', false, fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, fullSamplesGallery);
        //         event.preventDefault();
        //     }
        // }, false);
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

        [...document.querySelectorAll('[data-sample-id]')].forEach( x => {
            x.addEventListener('click', this.scrollToColor);
        }); 
    }

    scrollToColor(e) {
        const id = e.target.getAttribute('data-sample-id');
        const wrapper = document.querySelector('.full-samples-gallery__wrapper');
        const category = [...wrapper.querySelectorAll('[data-sample-category]')].find(x => {
            return x.attributes[1].value === id;
        });
        TweenMax.to(wrapper, 0.8, {scrollTo:{
            y: category.offsetTop,
            offsetY: 36,
            ease: Expo.easeInOut
        }});

        //Utils.toggleClass(e.target, 'active');
        e.preventDefault();
    }

    addImages(wrapper) {
        console.log(this.data);

        let containerHtml = '';

        this.data.samples.forEach(category => {
            let fullSamplesHtml = '';
            category.items.forEach(item => {
                fullSamplesHtml += `
                    <div class="full-samples-gallery__item">
                        <div class="img">
                            <img src="${item.img}" alt="${item.title}">
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
    }

    static init() {
        Samples.items = [...document.querySelectorAll('[data-samples]')].map((element, id) => new Samples(element, id));
        console.log('Samples: ', Samples.items);
    }
}