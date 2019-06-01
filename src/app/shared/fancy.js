/* jshint esversion: 6 */
/* tweenmax & swiper needed */

import FancyTransition from "./fancy.transition";

let clickClose;
let swiperInstance;

const body = document.querySelector('body');
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;
const prevIcon = `<svg><use xlink:href="#svg-prev"></use></svg>`;
const nextIcon = `<svg><use xlink:href="#svg-next"></use></svg>`;
const fullGalleryIcon = `<svg><use xlink:href="#svg-grid3x3"></use></svg>`;
const slideAnimationSpeed = 1000;

export default class Fancy {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.smallImageUrl = node.getAttribute('src');
        this.bigImageUrl = node.getAttribute('data-fancy-img');
        this.caption = node.getAttribute('data-fancy-caption');

        this.addListener();
    }

    addListener() {
        const click = (e) => {
            this.openDetailGallery();
            e.preventDefault();
        };
        this.click = click;
        this.node.addEventListener('click', this.click);
    }

    openDetailGallery() {
        Fancy.initDetailGallery(this.id);
    }

    destroy() {
        this.node.removeEventListener('click', this.click);
    }

    //INIT
    static init() {
        Fancy.items = [...document.querySelectorAll('[data-fancy-img]')].map((element, id) => new Fancy(element, id));
        console.log('Fancy: ', Fancy.items);
    }

    //DESTROY ALL NODES AND CREATED CONTAINER ELEMENTS
    static destroyAll() {
        Fancy.items.forEach(node => {
            node.destroy();
        });
        if (swiperInstance) {
            swiperInstance.destroy();
        }
        if (document.querySelector('detail-gallery')) {
            document.querySelector('detail-gallery').remove();
        }
        if (document.querySelector('full-gallery')) {
            document.querySelector('full-gallery').remove();
        }   
    }

    //CREATE MARKUP FOR DETAIL GALLERY AND ADD CLOSE LISTENER
    static initDetailGallery(id) {
        let detailGallery = document.createElement('div');
        let detailGalleryClose = document.createElement('div');
        let detailGalleryBg = document.createElement('div');
        let detailGalleryWrapper = document.createElement('div');
        let detailGalleryFooter = document.createElement('div');

        detailGallery.classList.add('detail-gallery');
        detailGalleryClose.classList.add('detail-gallery__close');
        detailGalleryBg.classList.add('detail-gallery__bg');
        detailGalleryWrapper.classList.add('detail-gallery__wrapper');
        detailGalleryFooter.classList.add('detail-gallery__footer');

        detailGalleryClose.innerHTML = closeIcon;

        clickClose = (e) => {
            FancyTransition.closeLayer('detailGallery', detailGalleryBg, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter, detailGallery);
            e.preventDefault();
        };
        detailGalleryClose.addEventListener('click', clickClose);

        document.body.appendChild(detailGallery);
        detailGallery.appendChild(detailGalleryClose);
        detailGallery.appendChild(detailGalleryBg);
        detailGallery.appendChild(detailGalleryWrapper);
        detailGallery.appendChild(detailGalleryFooter);

        detailGalleryFooter.innerHTML = `
            <div class="detail-gallery__cta">${fullGalleryIcon}</div>
            <div class="detail-gallery__caption"><span></span></div>
            <div class="detail-gallery__pagination"></div>
        `;

        body.classList.add('detail-gallery-open');
        Fancy.initSwiper(detailGalleryWrapper, id);

        FancyTransition.openLayer('detailGallery', detailGalleryBg, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter, id);
    }

    // INIT SWIPER WITH OPTIONS AND EVENTS
    static initSwiper(wrapper, id) {
        let sliderItems = Fancy.items.map((item) => {
            return {
                id: item.id,
                caption: item.caption,
                url: item.bigImageUrl
            };
        });

        let slidersHtml = '';
        sliderItems.forEach(slider => {
            slidersHtml += `
            <div class="swiper-slide">
                <div class="swiper-zoom-container"><img  class="swiper-lazy" data-src="${slider.url}"></div>
                <div class="swiper-lazy-preloader"></div>
            </div>`;
        });

        let swiperMarkup = `
        <div class="swiper-container">
            <div class="swiper-wrapper">${slidersHtml}</div>
            <div class="swiper-button-prev">${prevIcon}</div>
            <div class="swiper-button-next">${nextIcon}</div>  
        </div>`;

        let detailGallerySwiper = document.createElement('div');
        detailGallerySwiper.classList.add('detail-gallery__swiper');
        detailGallerySwiper.innerHTML = swiperMarkup;
        wrapper.appendChild(detailGallerySwiper);

        let options = {
            watchOverflow: true,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 60,
            speed: slideAnimationSpeed,
            allowTouchMove: false,
            zoom: {
                maxRatio: 4,
                toggle: true
            },
            preloadImages: false,
            lazy: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.detail-gallery__pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    const actualIndex = Number(index + 1);
                    return `<span class="detail-gallery__pagination-item ${className}">${actualIndex}/${sliderItems.length}</span>`;
                },
            },
            breakpoints: {
                768: {
                    allowTouchMove: true,
                }
              },
            on: {
                doubleTap: function () {
                    const detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper ');
                    Fancy.toggleClass(body, 'fancy-zoom');

                    if (body.classList.contains('fancy-zoom')) {
                        this.allowSlidePrev = false;
                        this.allowSlideNext = false;
                        TweenMax.to(detailGalleryWrapper, 0.5, {
                            height: window.innerHeight - 60,
                            ease: Expo.easeInOut
                        });
                    } else {
                        this.allowSlidePrev = true;
                        this.allowSlideNext = true;
                        TweenMax.to(detailGalleryWrapper, 0.5, {
                            height: window.innerHeight - 65 - 60,
                            ease: Expo.easeInOut
                        });
                    }
                },
                init: function () {
                    const caption = sliderItems[this.activeIndex].caption;
                    const captionWrapper = document.querySelector('.detail-gallery__caption span');
                   
                    captionWrapper.innerHTML = caption;
                    this.slideTo(id, 0);
                },
                slideChange: function () {
                    const captionSpeed = (slideAnimationSpeed / 1000) / 2;
                    const caption = sliderItems[this.activeIndex].caption;
                    const captionWrapper = document.querySelector('.detail-gallery__caption span');
                    TweenMax.set(captionWrapper, {
                        bottom: 0,
                    });
                    TweenMax.to(captionWrapper, captionSpeed, {
                        bottom: -captionWrapper.offsetHeight,
                        ease: Expo.easeInOut,
                        onComplete: () => {
                            captionWrapper.innerHTML = caption;
                            TweenMax.to(captionWrapper, captionSpeed, {
                                bottom: 0,
                                ease: Expo.easeInOut
                            });
                        }
                    });
                }
            },
        };

        swiperInstance = new Swiper(document.querySelector('.detail-gallery__swiper .swiper-container'), options);
        swiperInstance.init();

    }

    static zoomOutOnClose() {
        swiperInstance.allowSlidePrev = true;
        swiperInstance.allowSlideNext = true;
        swiperInstance.zoom.out();
    }

    static destroySwiper() {
        swiperInstance.destroy();
    }

    static getImages() {
        return Fancy.items;
    }

    static toggleClass(target, cssClass) {
        if (target.classList.contains(cssClass)) {
            target.classList.remove(cssClass);
        } else {
            target.classList.add(cssClass);
        }
    }
}