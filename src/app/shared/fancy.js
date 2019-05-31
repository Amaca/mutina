/* jshint esversion: 6 */
/* tweenmax & swiper needed */

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
        Fancy.initDetailGallery();
    }

    destroy() {
        this.node.removeEventListener('click', this.click);
    }

    static init() {
        Fancy.items = [...document.querySelectorAll('[data-fancy-img]')].map((element, id) => new Fancy(element, id));
        console.log('Fancy: ', Fancy.items);
    }

    static destroyAll() {
        Fancy.items.forEach(node => {
            node.destroy();
        });
        swiperInstance.destroy();
        document.querySelector('detail-gallery').remove();
        document.querySelector('full-gallery').remove();
    }

    static initDetailGallery() {
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
            Fancy.closeLayer(detailGallery, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter);
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

        Fancy.openLayer(detailGalleryBg, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter);
    }

    static initSwiper(wrapper) {
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
            zoom: true,
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
            on: {
                doubleTap: function () {
                    Fancy.toggleClass(body, 'fancy-zoom');
                    if (body.classList.contains('fancy-zoom')) {
                        this.allowSlidePrev = false;
                        this.allowSlideNext = false;
                    } else {
                        this.allowSlidePrev = true;
                        this.allowSlideNext = true;
                    }
                },
                init: function () {
                    const caption = sliderItems[this.activeIndex].caption;
                    const captionWrapper = document.querySelector('.detail-gallery__caption span');
                    captionWrapper.innerHTML = caption;
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

    static openLayer(layer, close, wrapper, footer) {
        const closeHeight = close.clientHeight;
        const footerHeight = footer ? footer.clientHeight : null;
        const wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;

        Fancy.initSwiper(wrapper);
        TweenMax.set(layer, {
            bottom: 0,
            top: 'auto',
            height: 0,
        });
        TweenMax.set(close, {
            height: 0,
        });
        if (wrapper && footer) {
            TweenMax.set(wrapper, {
                bottom: -wrapperHeight,
            });
            TweenMax.set(footer, {
                bottom: -footerHeight,
            });
        }
        TweenMax.to(layer, 1, {
            height: window.innerHeight,
            ease: Expo.easeInOut
        });
        TweenMax.to(layer, 0.8, {
            backgroundColor: '#ffffff',
            ease: Power1.easeOut
        }).delay(0.4);
        if (wrapper && footer) {
            TweenMax.to(wrapper, 1, {
                bottom: footerHeight,
                ease: Expo.easeInOut
            }).delay(0.1);
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
            TweenMax.to(footer, 1, {
                bottom: 0,
                ease: Expo.easeInOut,
                // onComplete: () => {
                //     Fancy.initSwiper(wrapper);
                // }
            }).delay(0.2);
        } else {
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        }
    }

    static closeLayer(layer, close, wrapper, footer) {
        const footerHeight = footer ? footer.clientHeight : null;
        const captionWrapper = document.querySelector('.detail-gallery__caption span');
        TweenMax.set(layer, {
            bottom: 'auto',
            top: 0,
            height: window.innerHeight,
        });
        if (wrapper && footer) {
            TweenMax.set(wrapper, {
                opacity: 1,
            });
            TweenMax.set(footer, {
                bottom: 0,
            });
            TweenMax.set(captionWrapper, {
                bottom: 0,
            });
        }
        if (wrapper && footer) {
            const captionSpeed = (slideAnimationSpeed / 1000) / 2;
            TweenMax.to(captionWrapper, captionSpeed, {
                bottom: -captionWrapper.offsetHeight,
                ease: Expo.easeInOut,
            });
            TweenMax.to(wrapper, 1, {
                opacity: 0,
                ease: Expo.easeInOut
            });
            TweenMax.to(footer, 1, {
                height: -footerHeight,
                ease: Expo.easeInOut
            });
        }

        let delay = wrapper && footer ? 1000 : 0;

        setTimeout(x => {
            TweenMax.to(layer, 1, {
                height: 0,
                ease: Expo.easeInOut,
            });
            TweenMax.to(close, 1, {
                height: 0,
                ease: Expo.easeInOut,
                onComplete: () => {
                    swiperInstance.destroy();
                    layer.remove();
                }
            });
        }, delay);
    }

    static toggleClass(target, cssClass) {
        if (target.classList.contains(cssClass)) {
            target.classList.remove(cssClass);
        } else {
            target.classList.add(cssClass);
        }
    }
}