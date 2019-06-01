/* jshint esversion: 6 */
/* tweenmax needed */

import Fancy from './fancy';

const body = document.querySelector('body');
const slideAnimationSpeed = 1000;

export default class FancyTransition {
    
    //OPEN LAYER ON IMAGE CLICK
    static openLayer(type, layer, close, wrapper, footer, id) {
        const closeHeight = close.clientHeight;
        const footerHeight = footer ? footer.clientHeight : null;
        const wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
        
        let isDetailGallery = false,
            isFullGallery = false;
        
        switch (type) {
            case 'detailGallery':
                isDetailGallery = true;
            break;
            case 'fullGallery':
                isFullGallery = true;
            break;
        }
            
        let arrowLeft;
        let arrowRight;

        if (isDetailGallery) {
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

        if (isDetailGallery) {
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

        if (isFullGallery) {
            TweenMax.set(wrapper, {
                bottom: -wrapperHeight,
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

        if (isDetailGallery) {
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
        } else if(isFullGallery) {
            TweenMax.to(wrapper, 0.8, {
                bottom: 0,
                ease: Expo.easeIn
            });
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        } else {
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        }
    }

    //CLOSE LAYER ON CLOSE CLICK
    static closeLayer(type, layer, close, wrapper, footer, mainWrapper) {
        const captionWrapper = document.querySelector('.detail-gallery__caption span');
        const footerHeight = footer ? footer.clientHeight : null;
        const wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
        const detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper');
        const arrowLeft = document.querySelector('.swiper-button-prev');
        const arrowRight = document.querySelector('.swiper-button-next');
        let delayAll = 0;
        let delay = 0;

        let isDetailGallery = false,
            isFullGallery = false;
        
        switch (type) {
            case 'detailGallery':
                delay = 500;
                body.classList.remove('detail-gallery-open');
                isDetailGallery = true;
            break;
            case 'fullGallery':
                delay = 500;
                body.classList.remove('full-gallery-open');
                isFullGallery = true;
            break;
            default:
                delay = 0;
            break;
        }

        if (isDetailGallery && body.classList.contains('fancy-zoom')){
            TweenMax.to(detailGalleryWrapper, 0.5, {
                height: window.innerHeight - 65 - 60,
                ease: Expo.easeInOut
            });
            Fancy.toggleClass(body, 'fancy-zoom');
            Fancy.zoomOutOnClose();
            delayAll = 500;
        }
        
        setTimeout( x => {
            TweenMax.set(layer, {
                bottom: 0,
                top: 'auto',
                height: window.innerHeight,
            });
            if (isDetailGallery) {
                const captionSpeed = (slideAnimationSpeed / 1000) / 2;
                TweenMax.set(footer, {
                    bottom: 0,
                });
                TweenMax.set(captionWrapper, {
                    bottom: 0,
                });
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

            if (isFullGallery) {
                TweenMax.to(close, 1, {
                    height: 0,
                    ease: Expo.easeInOut
                });
                TweenMax.to(wrapper, 0.8, {
                    bottom: -wrapperHeight,
                    ease: Expo.easeIn
                }).delay(0.1);
            }

            setTimeout(x => {
                TweenMax.to(layer, 1, {
                    height: 0,
                    ease: Expo.easeInOut,
                    onComplete: () => {
                        if (isDetailGallery) {
                            Fancy.destroySwiper();
                        }
                        mainWrapper.remove();
                    }
                });
            }, delay);
        }, delayAll);
    }
}