/* jshint esversion: 6 */

import "gsap/ScrollToPlugin";
import Samples from "./samples";
import Utils from "./utils";

let clickTab;
let scrollWrapper;
let clickBack;
let swiperInstance;

const body = document.querySelector('body');
//const html = document.getElementsByTagName('html')[0];
const header = document.querySelector('header');
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;

export default class SamplesDetail {

    static initSampleDetailGallery(id, data, wrapper) {

        let detailSampleGalleryWrapper = document.createElement('div');
        detailSampleGalleryWrapper.classList.add('detail-samples-gallery__wrapper');
        wrapper.appendChild(detailSampleGalleryWrapper);

        SamplesDetail.initSwiper(id, data, detailSampleGalleryWrapper);

        body.classList.add('detail-sample-gallery-open');
        //html.style.overflow = 'hidden';

    }

    static openLayer(wrapper) {
        const back = document.querySelector('.full-samples-gallery__back svg');
        const headerCat = document.querySelector('.full-samples-gallery__header-cat');
        const viewportWidth = window.innerWidth > 768 ? ((window.innerWidth * 8) / 10) : ((window.innerWidth * 6) / 10);

        clickBack = (e) => {
            SamplesDetail.closeLayer(wrapper, back, headerCat, viewportWidth);
            e.preventDefault();
        };

        back.addEventListener('click', clickBack);

        TweenMax.set(wrapper, {
            bottom: -wrapper.offsetHeight,
        });
        TweenMax.set(back, {
            transform: 'translateX(-32px)',
        });
        TweenMax.set(headerCat, {
            marginLeft: '80px',
        });
        TweenMax.to(wrapper, 1, {
            bottom: 0,
            ease: Expo.easeInOut
        });
        TweenMax.to(back, 1, {
            transform: 'translateX(0)',
            ease: Expo.easeInOut
        })
        TweenMax.to(headerCat, 1, {
            marginLeft: '146px',
            maxWidth: (viewportWidth - 146) + 'px',
            flex: '0 0 ' + (viewportWidth - 146) + 'px',
            ease: Expo.easeInOut
        })
    }

    static closeLayer(wrapper, back, headerCat, viewportWidth) {

        TweenMax.set(wrapper, {
            bottom: 0,
        });
        TweenMax.set(back, {
            transform: 'translateX(0)',
        });
        TweenMax.set(headerCat, {
            marginLeft: '146px',
            maxWidth: (viewportWidth - 146) + 'px',
            flex: '0 0 ' + (viewportWidth - 146) + 'px',
        });
        TweenMax.to(back, 1, {
            transform: 'translateX(-32px)',
            ease: Expo.easeInOut
        });
        TweenMax.to(headerCat, 1, {
            marginLeft: '80px',
            maxWidth: (viewportWidth - 80) + 'px',
            flex: '0 0 ' + (viewportWidth - 80) + 'px',
            ease: Expo.easeInOut
        });
        TweenMax.to(wrapper, 1, {
            bottom: -wrapper.offsetHeight,
            ease: Expo.easeInOut,
            onComplete: () => {
                SamplesDetail.destroyAll();
                Samples.addTabsListeners();
            }
        });
    }

    static destroyAll() {
        const wrapper = document.querySelector('.detail-samples-gallery__wrapper');
        const back = document.querySelector('.full-samples-gallery__back svg');
        const tabs = [...document.querySelectorAll('.full-samples-gallery__header-cat ul li a')];

        body.classList.remove('detail-sample-gallery-open');
        //html.style.overflow = 'initial';

        tabs.forEach(tab => {
            tab.removeEventListener('click', clickTab);
        });
        back.removeEventListener('click', clickBack);
        swiperInstance.destroy();
        if (wrapper) {
            wrapper.remove();
        }
    }

    static initSwiper(id, data, wrapper) {
        let slidesHtml = '';

        data.forEach((item, index) => {
            let className = item.parent === true ? 'swiper-slide--parent' : '';
            let attribute = 'data-sample-detail-id="' + item.categoryId + '"';
            slidesHtml += `
            <div class="swiper-slide ${className}" ${attribute} data-id="${index}">
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

        wrapper.innerHTML = swiperHtml;

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
                    setTimeout(x => {
                        this.slideTo(id, 0);
                    }, 300);
                    SamplesDetail.openLayer(wrapper);
                },
                slideChange: function () {
                    const tabs = [...document.querySelectorAll('.full-samples-gallery__header-cat ul li a')];
                    const currentSlide = this.slides[this.activeIndex];
                    const currentCategory = tabs.find(tab => {
                        return (currentSlide.getAttribute('data-sample-detail-id') === tab.getAttribute('data-sample-id'));
                    });
                    tabs.forEach(tab => {
                        tab.classList.remove('active');
                    });
                    Utils.toggleClass(currentCategory, 'active');
                }
            },
        };

        swiperInstance = new Swiper(document.querySelector('.detail-sample-gallery__swiper .swiper-container'), options);
        swiperInstance.init();
        SamplesDetail.initTabs(id);
    }

    static initTabs(id) {
        const tabs = [...document.querySelectorAll('.full-samples-gallery__header-cat ul li a')];
        const categoryParents = [...document.querySelectorAll('[data-sample-detail-id]')];

        clickTab = (e) => {
            SamplesDetail.slideToCategory(e, id, categoryParents, tabs);
            e.preventDefault();
        };

        tabs.forEach(tab => {
            tab.addEventListener('click', clickTab);
        });
    }

    static slideToCategory(e, id, categoryParents, tabs) {
        const target = e.target;
        const selectedParent = categoryParents.find(parent => {
            return (parent.getAttribute('data-sample-detail-id') === target.getAttribute('data-sample-id'));
        });
        swiperInstance.slideTo(Number(selectedParent.getAttribute('data-id')));
    }

    static init(e, images, wrapper) {
        const id = Number(e.target.getAttribute('data-sample-detail'));
        SamplesDetail.initSampleDetailGallery(id, images, wrapper);
    }
}