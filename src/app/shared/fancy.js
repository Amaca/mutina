/* jshint esversion: 6 */

let clickClose;
let swiperInstance;

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

        detailGalleryClose.innerHTML = `<svg><use xlink:href="#svg-close"></use></svg>`;

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
                <div class="swiper-zoom-container"><img src="${slider.url}"></div>
                <div class="caption">${slider.caption}</div>
            </div>`;
        });

        let swiperMarkup = `
        <div class="swiper-container">
            <div class="swiper-wrapper">${slidersHtml}</div>
            <div class="swiper-pagination"></div>   
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>  
        </div>`;

        let detailGallerySwiper = document.createElement('div');
        detailGallerySwiper.classList.add('detail-gallery__swiper');
        detailGallerySwiper.innerHTML = swiperMarkup;
        wrapper.appendChild(detailGallerySwiper);

        let options = {
            watchOverflow: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 1,
            spaceBetween: 60,
            speed: 400,
            zoom: true
        };

        swiperInstance = new Swiper(document.querySelector('.detail-gallery__swiper .swiper-container'), options);
        swiperInstance.init();

    }

    static openLayer(layer, close, wrapper, footer) {
        const closeHeight = close.clientHeight;
        const footerHeight = footer ? footer.clientHeight : null;
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
                opacity: 0,
            });
            TweenMax.set(footer, {
                height: 0,
            });
        }
        TweenMax.to(layer, 1, {
            height: window.innerHeight,
            ease: Expo.easeInOut
        });

        if (wrapper && footer) {
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
            TweenMax.to(footer, 1, {
                height: footerHeight,
                ease: Expo.easeInOut,
                onComplete: () => {
                    Fancy.initSwiper(wrapper);
                }
            }).delay(1);
            TweenMax.to(wrapper, 1, {
                opacity: 1,
                ease: Expo.easeInOut
            }).delay(2);
        } else {
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        }
    }

    static closeLayer(layer, close, wrapper, footer) {
        const footerHeight = footer ? footer.clientHeight : null;
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
                height: footerHeight,
            });
        }
        if (wrapper && footer) {
            TweenMax.to(wrapper, 1, {
                opacity: 0,
                ease: Expo.easeInOut
            });
            TweenMax.to(footer, 1, {
                height: 0,
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
}