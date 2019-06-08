/* jshint esversion: 6 */

import FancyTransition from "./fancy.transition";
import "gsap/ScrollToPlugin";
import Utils from "./utils";
import Samples from "./samples";

let clickClose;
let scrollWrapper;
let swiperInstance;

const body = document.querySelector('body');
const header = document.querySelector('header');
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;

export default class SamplesDetail {

    static initSampleDetailGallery(id, data, wrapper) {
        let detailSampleGalleryWrapper = document.createElement('div');
        detailSampleGalleryWrapper.classList.add('detail-samples-gallery__wrapper');
        wrapper.appendChild(detailSampleGalleryWrapper);

        SamplesDetail.initSwiper(id, data, detailSampleGalleryWrapper);
        
        body.classList.add('detail-sample-gallery-open');

        TweenMax.set(detailSampleGalleryWrapper, {
            bottom: -detailSampleGalleryWrapper.offsetHeight,
        });
        TweenMax.to(detailSampleGalleryWrapper, 1, {
            bottom: 0,
            ease: Expo.easeInOut
        });
    }

    static initSwiper(id, data, content) {
        let slidesHtml = '';

        data.forEach(item => {
            let className = item.parent === true ? 'swiper-slide--parent' : '';
            let attribute = item.parent === true ? 'data-sample-detail-id="' + item.color + '"' : '';
            slidesHtml += `
            <div class="swiper-slide">
                <div class="slider__picture">
                    <img data-src="${item.imgHd}" class="swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="slider__caption">
                    <div class="box">
                        <h6 class="h6">${item.title}</h6>
                        <div class="text">${item.size}</div>
                        <div class="cta"><a href="#" class="btn--inline">Add to samples</a></div>
                    </div>
                </div>
            </div>
            `;
        });

        let swiperHtml = `
        <div class="detail-sample-gallery__swiper">
            <div class="slider slider--samples">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                    ${slidesHtml}
                    </div>
                </div>
            </div>
        </div>
        `;

        content.innerHTML = swiperHtml;

        let options = {
            grabCursor: true,
            watchOverflow: true,
            centeredSlides: true,
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 60,
            preloadImages: false,
            lazy: true,
            watchSlidesVisibility: true,
            freeMode: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumVelocityRatio: 0.3,
            speed: 400,
            breakpoints: {
                576: {
                    spaceBetween: 20,
                },
                768: {
                    spaceBetween: 40,
                }
            },
            on: {
                init: function () {
                    setTimeout( x=> {
                        this.slideTo(id, 0);
                    },300);
                },
            },
        };

        swiperInstance = new Swiper(document.querySelector('.detail-sample-gallery__swiper .swiper-container'), options);
        swiperInstance.init();
    }

    static init(e, images, wrapper) {
        const id = Number(e.target.getAttribute('data-sample-detail'));
        SamplesDetail.initSampleDetailGallery(id, images, wrapper);
    }
}