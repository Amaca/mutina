/* jshint esversion: 6 */

import FancyTransition from "./fancy.transition";

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
        let fullSamplesClose = document.createElement('div');
        let fullSamplesHeader = document.createElement('div');
        let fullSamplesBg = document.createElement('div');
        let fullSamplesWrapper = document.createElement('div');
        let fullSamplesContainer = document.createElement('div');

        fullSamplesGallery.classList.add('full-samples-gallery');
        fullSamplesClose.classList.add('full-samples-gallery__close');
        fullSamplesHeader.classList.add('full-samples-gallery__header');
        fullSamplesBg.classList.add('full-samples-gallery__bg');
        fullSamplesWrapper.classList.add('full-samples-gallery__wrapper');
        fullSamplesContainer.classList.add('full-samples-gallery__container');

        fullSamplesClose.innerHTML = closeIcon;

        clickClose = (e) => {
            FancyTransition.closeLayer('fullGallery', false, fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, fullSamplesGallery);
            e.preventDefault();
        };
        fullSamplesClose.addEventListener('click', clickClose);

        document.body.appendChild(fullSamplesGallery);
        fullSamplesGallery.appendChild(fullSamplesClose);
        fullSamplesGallery.appendChild(fullSamplesHeader);
        fullSamplesGallery.appendChild(fullSamplesBg);
        fullSamplesGallery.appendChild(fullSamplesWrapper);
        fullSamplesWrapper.appendChild(fullSamplesContainer);

        body.classList.add('samples-gallery-open');
        this.addImages(fullSamplesContainer);

        FancyTransition.openLayer('fullGallery', fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, this.id);

        history.pushState({
            id: 'fullsamplesgallery'
        }, 'Full Samples Gallery | Mutina', 'http://localhost:9999/prodotto.html?p=homepage');


        window.addEventListener('popstate', function (event) {
            console.log(event);
            if (event.state && event.state.id === 'fullsamplesgallery') {
                FancyTransition.closeLayer('fullGallery', false, fullSamplesBg, fullSamplesClose, fullSamplesWrapper, fullSamplesHeader, fullSamplesGallery);
                event.preventDefault();
            }
        }, false);
    }

    //https://gomakethings.com/how-to-update-a-url-without-reloading-the-page-using-vanilla-javascript/

    addImages(wrapper) {
        let fullSamplesHtml = '';
        this.data.samples.forEach(data => {
            fullSamplesHtml += `
                <img src="${data.img}">
            `;
        });
        wrapper.innerHTML = fullSamplesHtml;
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