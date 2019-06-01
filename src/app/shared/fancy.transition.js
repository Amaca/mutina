/* jshint esversion: 6 */
/* tweenmax needed */

import Fancy from './fancy';

const body = document.querySelector('body');
const slideAnimationSpeed = 1000;

export default class FancyTransition {
    
    //OPEN LAYER ON IMAGE CLICK
    static openLayer(layer, close, wrapper, footer, id) {
        const closeHeight = close.clientHeight;
        const footerHeight = footer ? footer.clientHeight : null;
        const wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
        let arrowLeft;
        let arrowRight;
        
        if (wrapper && footer) {
            body.classList.add('detail-gallery-open');
            Fancy.initSwiper(wrapper, id);
            arrowLeft = document.querySelector('.swiper-button-prev');
            arrowRight = document.querySelector('.swiper-button-next');
        }
        TweenMax.set(layer, {
            bottom: 0,
            top: 'auto',
            height: 0,
        });
        TweenMax.set(close, {
            height: 0,
        });
        if (wrapper && footer) {
            TweenMax.set(arrowLeft,{
                left: -100,
            });
            TweenMax.set(arrowRight,{
                right: -100,
            });
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
            TweenMax.to(wrapper, 0.8, {
                bottom: footerHeight,
                ease: Expo.easeIn
            });
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
            TweenMax.to(footer, 1, {
                bottom: 0,
                ease: Expo.easeInOut,
            }).delay(0.2);
            TweenMax.to(arrowLeft, 1, {
                left: 0,
                ease: Expo.easeInOut
            }).delay(0.5);
            TweenMax.to(arrowRight, 1, {
                right: 0,
                ease: Expo.easeInOut
            }).delay(0.5);
        } else {
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        }
    }

    //CLOSE LAYER ON CLOSE CLICK
    static closeLayer(layer, close, wrapper, footer, mainWrapper) {
        const captionWrapper = document.querySelector('.detail-gallery__caption span');
        const footerHeight = footer ? footer.clientHeight : null;
        const wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
        const detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper');
        const arrowLeft = document.querySelector('.swiper-button-prev');
        const arrowRight = document.querySelector('.swiper-button-next');
        let delayAll = 0;

        if (wrapper && footer) {
            body.classList.remove('detail-gallery-open');
            
            if (body.classList.contains('fancy-zoom')){
                TweenMax.to(detailGalleryWrapper, 0.5, {
                    height: window.innerHeight - 65 - 60,
                    ease: Expo.easeInOut
                });
                Fancy.toggleClass(body, 'fancy-zoom');
                Fancy.zoomOutOnClose();
                delayAll = 500;
            }
        }

        setTimeout( x => {
            TweenMax.set(layer, {
                bottom: 0,
                top: 'auto',
                height: window.innerHeight,
            });
            if (wrapper && footer) {
                TweenMax.set(footer, {
                    bottom: 0,
                });
                TweenMax.set(captionWrapper, {
                    bottom: 0,
                });
            }
            if (wrapper && footer) {
                const captionSpeed = (slideAnimationSpeed / 1000) / 2;
                TweenMax.set(arrowLeft,{
                    left: 0,
                });
                TweenMax.set(arrowRight,{
                    right: 0,
                });
                TweenMax.to(captionWrapper, captionSpeed, {
                    bottom: -captionWrapper.offsetHeight,
                    ease: Expo.easeInOut,
                });
                TweenMax.to(close, 1, {
                    height: 0,
                    ease: Expo.easeInOut
                });
                TweenMax.to(arrowLeft, 1, {
                    left: -100,
                    ease: Expo.easeInOut
                });
                TweenMax.to(arrowRight, 1, {
                    right: -100,
                    ease: Expo.easeInOut
                });
                TweenMax.to(wrapper, 0.8, {
                    bottom: -wrapperHeight,
                    ease: Expo.easeIn
                }).delay(0.1);
                
                TweenMax.to(footer, 1, {
                    bottom: -footerHeight,
                    ease: Expo.easeInOut
                }).delay(0.2);
            }

            let delay = wrapper && footer ? 500 : 0;

            setTimeout(x => {
                TweenMax.to(layer, 1, {
                    height: 0,
                    ease: Expo.easeInOut,
                    onComplete: () => {
                        if (wrapper && footer) {
                            Fancy.destroySwiper();
                        }
                        mainWrapper.remove();
                    }
                });
            }, delay);
        }, delayAll);
    }
}