/* jshint esversion: 6 */

let slidersArray = [];

export default class Sliders {

    constructor(slider, index) {
        this.slider = slider;
        this.index = index;
        this.options = this.setOptions();

        this.setOptions();
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
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 60,
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
                }
            };
            //Cover Slider
        } else if (parentWrap.classList.contains('slider--test') === true) {
            options = {
                grabCursor: true,
                watchOverflow: true,
                centeredSlides: false,
                loop: true,
                slidesPerView: 5,
                spaceBetween: 100,
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
    }

    static init() {
        Sliders.items = [...document.querySelectorAll('.swiper-container')].map((slider, index) => new Sliders(slider, index));
        console.log('sliders: ', Sliders.items);
    }

    static destroyAll() {
        Sliders.items.forEach(slider => {
            slider.destroy();
        });
    }
}