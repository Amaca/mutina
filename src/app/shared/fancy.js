/* jshint esversion: 6 */
/* tweenmax & swiper needed */

import Dom from './dom';
import FancyTransition from './fancy.transition';
import Follower from './follower';
import Utils from './utils';

let clickClose;
let clickSwitch;
let swiperInstance;
let firstLoad;

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const closeIcon = `<svg><use xlink:href="#svg-close"></use></svg>`;
const prevIcon = `<svg><use xlink:href="#svg-prev"></use></svg>`;
const nextIcon = `<svg><use xlink:href="#svg-next"></use></svg>`;
const fullGalleryIcon = `<svg><use xlink:href="#svg-grid3x3"></use></svg>`;
const slideAnimationSpeed = 1000;

export default class Fancy {

    constructor(node, id) {
        this.node = node;
        this.group = String(node.getAttribute('data-fancy-group'));
        this.id = Fancy.groups[this.group] === undefined ? Fancy.groups[this.group] = 0 : ++Fancy.groups[this.group];
        this.smallImageUrl = node.getAttribute('data-fancy-thumb');
        this.bigImageUrl = node.getAttribute('data-fancy-img');
        this.caption = node.getAttribute('data-fancy-caption');
        this.groupCaption = node.getAttribute('data-fancy-group-caption');
        this.zoom = node.getAttribute('data-zoom') === 'true' || window.innerWidth <= 768 ? true : false;
        this.addListener();
    }

    addListener() {
        const click = (e) => {
            this.openDetailGallery();
            e.preventDefault();
        };
        this.click = click;
        this.node.addEventListener('click', this.click);
        Follower.addMouseListener(this.node);
    }

    openDetailGallery(e) {
        Fancy.initDetailGallery(this.id, this.group === 'null' ? null : this.group);
    }

    destroy() {
        this.node.removeEventListener('click', this.click);
        Follower.removeMouseListener(this.node);
    }

    //INIT
    static init() {
        Fancy.items = [...document.querySelectorAll('[data-fancy-img]')].map((element, id) => new Fancy(element, id));
        debug__('Fancy: ', Fancy.items);
    }

    //DESTROY ALL NODES AND CREATED CONTAINER ELEMENTS
    static destroyAll() {
        Fancy.items.forEach(node => {
            node.destroy();
        });
        if (swiperInstance) {
            swiperInstance.destroy();
        }
        if (document.querySelector('.detail-gallery')) {
            document.querySelector('.detail-gallery').remove();
        }
        if (document.querySelector('.full-gallery')) {
            document.querySelector('.full-gallery').remove();
        }
        if (document.querySelector('.detail-gallery__close')) {
            document.querySelector('.detail-gallery__close').removeEventListener('click', clickClose);
        }
        if (document.querySelector('.detail-gallery__cta')) {
            document.querySelector('.detail-gallery__cta').removeEventListener('click', clickSwitch);
        }

        Fancy.groups = {};
    }

    //CREATE MARKUP FOR DETAIL GALLERY AND ADD CLOSE LISTENER
    static initDetailGallery(id, groupId) {
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
            Fancy.close(e, 'detailGallery', false, detailGalleryBg, detailGalleryClose, detailGalleryWrapper, null, detailGalleryFooter, detailGallery);
        };

        detailGalleryClose.addEventListener('click', clickClose);

        document.body.appendChild(detailGallery);
        detailGallery.appendChild(detailGalleryClose);
        detailGallery.appendChild(detailGalleryBg);
        detailGallery.appendChild(detailGalleryWrapper);
        detailGallery.appendChild(detailGalleryFooter);

        detailGalleryFooter.innerHTML = '';

        if (!groupId) {
            detailGalleryFooter.innerHTML += `<div class="detail-gallery__cta">${fullGalleryIcon}</div>`;
        } else {
            detailGalleryFooter.innerHTML += `<div class="detail-gallery__group-caption"></div>`;
        }

        detailGalleryFooter.innerHTML += `
            <div class="detail-gallery__caption"><span></span></div>
            <div class="detail-gallery__pagination"></div>
        `;

        if (!groupId) {
            const detailGallerySwitch = document.querySelector('.detail-gallery__cta');
            clickSwitch = (e) => {
                Fancy.close(e, 'detailGallery', true, detailGalleryBg, detailGalleryClose, detailGalleryWrapper, null, detailGalleryFooter, detailGallery);
            };
            detailGallerySwitch.addEventListener('click', clickSwitch);
        }

        body.classList.add('detail-gallery-open');
        if (Dom.fastscroll) {
            body.style.cssText = 'overflow: hidden;';
        } else {
            html.style.cssText = 'overflow: hidden;';
        }
        Fancy.initSwiper('detailGallery', detailGalleryBg, detailGalleryClose, detailGalleryWrapper, null, detailGalleryFooter, id, groupId);

    }

    static close(e, type, isSwitch, bg, close, wrapper, header, footer, container) {
        const images = [...document.querySelectorAll('.detail-gallery__swiper .swiper-lazy')];
        Follower.removeMouseListener(images);
        FancyTransition.closeLayer(type, isSwitch, bg, close, wrapper, header, footer, container);
        e.preventDefault();
    }

    // INIT SWIPER WITH OPTIONS AND EVENTS
    static initSwiper(type, layer, close, wrapper, header, footer, id, groupId) {
        let sliderItems = Fancy.items.map((item) => {
            return {
                id: item.id,
                caption: item.caption,
                url: item.bigImageUrl,
                group: item.group,
                groupCaption: item.groupCaption,
                zoom: item.zoom
            };
        });

        if (groupId) {
            sliderItems = sliderItems.filter(x => {
                return x.group === groupId;
            });
        } else {
            sliderItems = sliderItems.filter(x => {
                return x.group === 'null';
            });
        }

        let slidersHtml = '';
        sliderItems.forEach(slider => {
            slidersHtml += `
            <div class="swiper-slide">
                <div class="swiper-zoom-container"><img class="swiper-lazy" data-src="${slider.url}" data-fancy-zoom="${slider.zoom}"></div>
                <div class="swiper-lazy-preloader"></div>
            </div>`;
        });

        let swiperMarkup = `
        <div class="swiper-container">
            <div class="swiper-wrapper">${slidersHtml}</div>
        </div>
        <div class="swiper-button-prev">${prevIcon}</div>
            <div class="swiper-button-next">${nextIcon}</div> 
        `;

        let detailGallerySwiper = document.createElement('div');
        detailGallerySwiper.classList.add('detail-gallery__swiper');
        detailGallerySwiper.innerHTML = swiperMarkup;

        wrapper.appendChild(detailGallerySwiper);
        firstLoad = false;

        const images = [...document.querySelectorAll('.detail-gallery__swiper .swiper-lazy')].filter(x => x.getAttribute('data-fancy-zoom') === 'true');

        Follower.addMouseListener(images);

        let options = {
            watchOverflow: true,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 60,
            touchRatio: 0,
            simulateTouch: true,
            speed: slideAnimationSpeed,
            zoom: {
                maxRatio: 2,
                toggle: false
            },
            preloadImages: false,
            lazy: true,
            breakpoints: {
                768: {
                    touchRatio: 1,
                }
            },
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
                doubleTap: function (e) {
                    if (window.innerWidth <= 768) {
                        Fancy.zoomBehaviour(this, sliderItems);
                    }
                },
                tap: function (e) {
                    if (window.innerWidth > 768) {
                        Fancy.zoomBehaviour(this, sliderItems);
                    }
                },
                init: function () {
                    const caption = sliderItems[this.activeIndex].caption;
                    const groupCaption = sliderItems[this.activeIndex].groupCaption;
                    const captionWrapper = document.querySelector('.detail-gallery__caption span');
                    const groupCaptionWrapper = document.querySelector('.detail-gallery__group-caption');
                    const activateZoom = sliderItems[this.activeIndex].zoom;
                    firstLoad = true;
                    if (captionWrapper && caption !== null) {
                        captionWrapper.innerHTML = caption;
                    }
                    if (groupCaptionWrapper && groupCaption !== null) {
                        groupCaptionWrapper.innerHTML = groupCaption;
                    }
                    this.keyboard.enable();
                    this.slideTo(id, 0);
                    if (activateZoom) {
                        this.zoom.enable();
                    } else {
                        this.zoom.disable();

                    }
                },
                slideChange: function () {
                    const captionSpeed = (slideAnimationSpeed / 1000) / 2;
                    const caption = sliderItems[this.activeIndex].caption;
                    const groupCaption = sliderItems[this.activeIndex].groupCaption;
                    const captionWrapper = document.querySelector('.detail-gallery__caption span');
                    const groupCaptionWrapper = document.querySelector('.detail-gallery__group-caption');
                    const activateZoom = sliderItems[this.activeIndex].zoom;
                    TweenMax.set(captionWrapper, {
                        bottom: 0,
                    });
                    TweenMax.to(captionWrapper, captionSpeed, {
                        bottom: -captionWrapper.parentNode.offsetHeight,
                        ease: Expo.easeInOut,
                        onComplete: () => {
                            if (captionWrapper && caption !== null) {
                                captionWrapper.innerHTML = caption;
                            }
                            TweenMax.to(captionWrapper, captionSpeed, {
                                bottom: 0,
                                ease: Expo.easeInOut
                            });
                        }
                    });
                    if (groupCaptionWrapper && groupCaption !== null) {
                        groupCaptionWrapper.innerHTML = groupCaption;
                    }
                    if (activateZoom) {
                        this.zoom.enable();
                    } else {
                        this.zoom.disable();
                    }
                },
                lazyImageReady: function () {
                    if (firstLoad) {
                        FancyTransition.openLayer(type, layer, close, wrapper, null, footer, id);
                    }
                    firstLoad = false;
                }
            },
        };

        swiperInstance = new Swiper(document.querySelector('.detail-gallery__swiper .swiper-container'), options);
        swiperInstance.init();

    }

    static zoomBehaviour(instance, items) {
        const detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper ');
        const follower = document.querySelector('.follower__secondary');
        const activateZoom = items[instance.activeIndex].zoom;
        if (activateZoom) {
            Utils.toggleClass(body, 'fancy-zoom');
            Utils.toggleClass(follower, 'zoom-out');
            instance.zoom.toggle();
            if (body.classList.contains('fancy-zoom')) {
                instance.allowSlidePrev = false;
                instance.allowSlideNext = false;
                instance.allowTouchMove = false;
                TweenMax.to(detailGalleryWrapper, 0.2, {
                    height: window.innerHeight - 60,
                    ease: Expo.easeInOut
                });
                // TweenMax.to(e.target, 0.2, {
                //     transform: 'scale(2)',
                //     ease: Expo.easeInOut
                // });
                // debug__('attivo');
                // e.target.addEventListener('dragstart', dragStart);
                // e.target.addEventListener('drag', dragMove);
                // e.target.addEventListener('dragend', dragEnd);
            } else {
                instance.allowSlidePrev = true;
                instance.allowSlideNext = true;
                instance.allowTouchMove = true;
                TweenMax.to(detailGalleryWrapper, 0.2, {
                    height: window.innerHeight - 65 - 60,
                    ease: Expo.easeInOut
                });
                // TweenMax.to(e.target, 0.2, {
                //     transform: 'scale(1)',
                //     ease: Expo.easeInOut
                // });
                // debug__('disattivo')
                // e.target.removeEventListener('dragstart', dragStart);
                // e.target.removeEventListener('drag', dragMove);
                // e.target.removeEventListener('dragend', dragEnd);
            }
        }
    }

    static zoomOutOnClose() {
        const follower = document.querySelector('.follower__secondary');
        Utils.toggleClass(follower, 'zoom-out');
        swiperInstance.allowSlidePrev = true;
        swiperInstance.allowSlideNext = true;
        swiperInstance.zoom.out();
        swiperInstance.zoom.disable();
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

Fancy.groups = {};