/* jshint esversion: 6 */


let slidersArray = [];
let clickTab;
import Utils from './utils';

export default class Sliders {

    constructor(slider, index) {
        this.slider = slider;
        this.index = index;
        this.parent = this.slider.parentNode;
        if (this.parent.classList.contains('slider--categories') === true) {
            this.tabs = [...this.parent.querySelectorAll('.slider__categories-wrapper ul li div')];
            this.slideToCategory = this.slideToCategory.bind(this);
        }

        this.options = this.setOptions();
        this.initSlider();
    }

    setOptions() {
        let parentWrap = this.slider.parentNode;
        let options = {};

        //Slider Carousel
        if (parentWrap.classList.contains('slider--carousel') === true) {
            options = {
                grabCursor: true,
                watchOverflow: true,
                centeredSlides: true,
                loop: this.slider.querySelectorAll('.swiper-slide').length <= 2 ? false : true,
                slidesPerView: 'auto',
                spaceBetween: 60,
                preloadImages: false,
                lazy: true,
                watchSlidesVisibility: true,
                freeMode: true,
                freeModeMomentumRatio: 1,
                freeModeMomentumVelocityRatio: 0.3,
                speed: 400,
                on: {
                    lazyImageReady: function (slideEl) {
                        slideEl.classList.add('swiper-slide-loaded');
                    }
                },
                breakpoints: {
                    576: {
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween: 40,
                    }
                }
            };
            //Fullscreen slider
        } else if (parentWrap.classList.contains('slider--fullscreen') === true) {
            options = {
                grabCursor: true,
                watchOverflow: true,
                centeredSlides: false,
                loop: true,
                slidesPerView: 1,
                spaceBetween: 60,
                speed: 800,
                preloadImages: false,
                lazy: true,
                autoHeight: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    lazyImageReady: function (slideEl) {
                        slideEl.classList.add('swiper-slide-loaded');
                    }
                }
            };
            //Lateral Slider
        } else if (parentWrap.classList.contains('slider--lateral') === true) {
            options = {
                grabCursor: true,
                watchOverflow: true,
                slidesPerView: 'auto',
                spaceBetween: 60,
                freeMode: true,
                freeModeMomentumRatio: 1,
                freeModeMomentumVelocityRatio: 0.3,
                preloadImages: false,
                lazy: true,
                watchSlidesVisibility: true,
                speed: 400,
                breakpoints: {
                    768: {
                        spaceBetween: 40,
                    }
                },
                on: {
                    init: function () {
                        if (parentWrap.classList.contains('slider--lateral-switch')) {
                            this.slideTo(this.slides.length - 1, 0);
                        }
                    },
                    lazyImageReady: function (slideEl, imageEl) {
                        slideEl.classList.add('swiper-slide-loaded');
                    }
                },
            };
        } else if (parentWrap.classList.contains('slider--related') === true) {
            options = {
                grabCursor: true,
                watchOverflow: true,
                centeredSlides: true,
                loop: this.slider.querySelectorAll('.swiper-slide').length <= 3 ? false : true,
                slidesPerView: 'auto',
                spaceBetween: 60,
                preloadImages: false,
                lazy: true,
                watchSlidesVisibility: true,
                freeMode: true,
                freeModeMomentumRatio: 1,
                freeModeMomentumVelocityRatio: 0.3,
                speed: 400,
                on: {
                    lazyImageReady: function (slideEl) {
                        slideEl.classList.add('swiper-slide-loaded');
                    }
                },
                breakpoints: {
                    576: {
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween: 40,
                    }
                }
            };
        } else if (parentWrap.classList.contains('slider--categories') === true) {

            const tabs = this.tabs;
            tabs.forEach(tab => {
                tab.addEventListener('click', this.slideToCategory);
            });

            options = {
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
                on: {
                    lazyImageReady: function (slideEl) {
                        slideEl.classList.add('swiper-slide-loaded');
                    },
                    slideChange: function () {
                        const tabs = [...this.el.parentNode.querySelectorAll('.slider__categories-wrapper ul li div')];
                        const currentSlide = this.slides[this.activeIndex];
                        const currentCategory = tabs.find(tab => {
                            return (currentSlide.getAttribute('data-slider-cat-detail-id') === tab.getAttribute('data-slider-cat-id'));
                        });
                        tabs.forEach(tab => {
                            tab.classList.remove('active');
                        });
                        Utils.toggleClass(currentCategory, 'active');
                    }
                },
                breakpoints: {
                    576: {
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween: 40,
                    }
                }
            };
        } else if (parentWrap.classList.contains('slider--squared') === true) {
            options = {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                },
                speed: 400
            };
        }

        return options;
    }

    initSlider() {
        let swiperInstance = new Swiper(this.slider, this.options);
        swiperInstance.init();
        this.swiperInstance = swiperInstance;
    }

    destroy() {
        this.swiperInstance.destroy();
        if (this.tabs) {
            this.tabs.forEach(tab => {
                tab.removeEventListener('click', this.slideToCategory);
            });
        }
    }

    slideToCategory(e) {
        const target = e.target;
        const categoryParents = [...document.querySelectorAll('[data-slider-cat-detail-id]')];
        const selectedParent = categoryParents.find(parent => {
            return (parent.getAttribute('data-slider-cat-detail-id') === target.getAttribute('data-slider-cat-id'));
        });
        this.swiperInstance.slideTo(Number(selectedParent.getAttribute('data-id')));
    }

    static init(debug) {
        Sliders.items = [...document.querySelectorAll('.swiper-container')].map((slider, index) => new Sliders(slider, index));
        if (debug) {
            console.log('Sliders: ', Sliders.items);
        };
    }

    static destroyAll() {
        Sliders.items.forEach(slider => {
            slider.destroy();
        });
    }
}