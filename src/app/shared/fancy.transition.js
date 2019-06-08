/* jshint esversion: 6 */
/* tweenmax needed */

import Fancy from './fancy';
import FancyViewAll from './fancy.view-all';
import App from '../app';
import Utils from './utils';

const body = document.querySelector('body');
const slideAnimationSpeed = 1000;

export default class FancyTransition {

    //OPEN LAYER ON IMAGE CLICK
    static openLayer(type, layer, close, wrapper, header, footer, id) {
        const closeHeight = close.clientHeight;
        const footerHeight = footer ? footer.clientHeight : null;
        let wrapperHeight;

        let isDetailGallery = false,
            isFullGallery = false,
            isFullSamplesGallery = false;

        switch (type) {
            case 'detailGallery':
                wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
                isDetailGallery = true;
                break;
            case 'fullGallery':
                wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
                isFullGallery = true;
                break;
            case 'fullSamplesGallery':
                wrapperHeight = wrapper ? window.innerHeight - 81 : null;
                isFullSamplesGallery = true;
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
            TweenMax.set(arrowLeft, {
                left: -100,
            });
            TweenMax.set(arrowRight, {
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

        if (isFullSamplesGallery) {
            TweenMax.set(wrapper, {
                bottom: -wrapperHeight,
            });
            TweenMax.set(header, {
                top: -header.offsetHeight,
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
        } else if (isFullGallery) {
            TweenMax.to(wrapper, 0.8, {
                bottom: 0,
                ease: Expo.easeIn
            });
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        } else if (isFullSamplesGallery) {
            TweenMax.to(wrapper, 0.8, {
                bottom: 0,
                ease: Expo.easeIn
            });
            TweenMax.to(header, 1, {
                top: 0,
                ease: Expo.easeInOut
            });
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            }).delay(0.5);
        }else {
            TweenMax.to(close, 1, {
                height: closeHeight,
                ease: Expo.easeInOut
            });
        }
    }

    //CLOSE LAYER ON CLOSE CLICK
    static closeLayer(type, isSwitch, layer, close, wrapper, header, footer, mainWrapper) {
        const captionWrapper = document.querySelector('.detail-gallery__caption span');
        const footerHeight = footer ? footer.clientHeight : null;
        const detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper');
        const arrowLeft = document.querySelector('.swiper-button-prev');
        const arrowRight = document.querySelector('.swiper-button-next');
        let wrapperHeight;
        let delayAll = 0;
        let delay = 0;

        let isDetailGallery = false,
            isFullGallery = false,
            isFullSamplesGallery = false,
            isDetailAndFullGallery = body.classList.contains('full-gallery-open') && body.classList.contains('detail-gallery-open');

        switch (type) {
            case 'detailGallery':
                wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
                delay = 500;
                body.classList.remove('detail-gallery-open');
                isDetailGallery = true;
                break;
            case 'fullGallery':
                wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
                delay = 500;
                body.classList.remove('full-gallery-open');
                isFullGallery = true;
                break;
            case 'fullSamplesGallery':
                wrapperHeight = wrapper ? window.innerHeight - 81 : null;
                delay = 500;
                body.classList.remove('samples-gallery-open');
                isFullSamplesGallery = true;
                break;
            default:
                delay = 0;
                break;
        }

        if (isDetailGallery && body.classList.contains('fancy-zoom')) {
            TweenMax.to(detailGalleryWrapper, 0.5, {
                height: window.innerHeight - 65 - 60,
                ease: Expo.easeInOut
            });
            Fancy.toggleClass(body, 'fancy-zoom');
            Fancy.zoomOutOnClose();
            delayAll = 500;
        }

        setTimeout(x => {
            if (!isSwitch) {
                TweenMax.set(layer, {
                    bottom: 0,
                    top: 'auto',
                    height: window.innerHeight,
                });
            }
            if (isDetailGallery) {
                const captionSpeed = (slideAnimationSpeed / 1000) / 2;
                TweenMax.set(footer, {
                    bottom: 0,
                });
                TweenMax.set(captionWrapper, {
                    bottom: 0,
                });
                TweenMax.set(arrowLeft, {
                    left: 0,
                });
                TweenMax.set(arrowRight, {
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

            if (isFullSamplesGallery) {
                TweenMax.to(close, 1, {
                    height: 0,
                    ease: Expo.easeInOut
                });
                TweenMax.to(header, 1, {
                    top: -header.offsetHeight,
                    ease: Expo.easeInOut
                }).delay(0.2);
                TweenMax.to(wrapper, 0.8, {
                    bottom: -wrapperHeight,
                    ease: Expo.easeIn
                }).delay(0.2);
            }

            setTimeout(x => {
                if (!isSwitch) {
                    TweenMax.to(layer, 1, {
                        height: 0,
                        ease: Expo.easeInOut,
                        onComplete: () => {
                            if (isDetailGallery) {
                                Fancy.destroySwiper();
                                mainWrapper.remove();
                            }
                            if (isFullGallery || isFullSamplesGallery) {
                                mainWrapper.remove();
                            }
                        }
                    });
                } else {
                    if (isDetailAndFullGallery) {
                        TweenMax.to(layer, 1, {
                            height: 0,
                            ease: Expo.easeInOut,
                        });
                    }
                    if (isDetailGallery) {
                        setTimeout(y => {
                            Fancy.destroySwiper();
                            mainWrapper.remove();
                        }, 1000);
                        if (!document.querySelector('.full-gallery')) {
                            FancyViewAll.initFullGallery(0);
                        }
                    }
                }

            }, delay);
        }, delayAll);
    }

}