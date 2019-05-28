/* jshint esversion: 6 */
/* global window, document, Swiper, TweenMax, TimelineMax */

import "@babel/polyfill";
import barba from '@barba/core';
import "css-vars-ponyfill";
import Anchors from './shared/anchors';
import Appears from './shared/appears';
import Dom from './shared/dom';
import Navigation from "./shared/navigation";
import Rect from './shared/rect';
import Sliders from './shared/sliders';
import Utils from './shared/utils';

let menuStyle = 1;
let scrollSpeed = 8;

export default class App {

    constructor() {}

    init() {
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        const header = document.querySelector('.header');
        const smooth = 'cubic-bezier(0, 0.97, 0.43, 1)';
        const anchorPanel = document.querySelector('.anchors');
        Dom.detect(body);
        const mouse = {
            x: 0,
            y: 0
        };
        this.body = body;
        this.page = page;
        this.header = header;
        this.smooth = smooth;
        this.anchorPanel = anchorPanel;
        this.appears = [];
        this.parallaxes = [];
        this.onResize();
        this.addListeners();
        this.transitions();
        this.onPageInit();

        Element.prototype.scrollIntoView_ = Element.prototype.scrollIntoView;
        Element.prototype.scrollIntoView = function () {
            if (Dom.fastscroll) {
                return this.scrollIntoView_.apply(this, arguments);
            } else {
                let rect = Rect.fromNode(this);
                const scrollTop = Dom.scrollTop();
                window.scrollTo(0, Math.max(0, scrollTop + rect.top - 120));
            }
        };
        Navigation.init();
        body.classList.add('ready');
    }

    transitions() {
        const transitionLayer = document.querySelector('.transition');
        const transitionLogo = document.querySelector('.transition svg');
        const transitionLogo1 = document.querySelector('.transition .logo__primary');
        const transitionLogo2 = document.querySelector('.transition .logo__secondary');


        setTimeout(x => {
            let tl = new TimelineMax({
                // delay: 2,
                // onComplete: setTimeout(x => {
                //     tl.reverse();
                // }, 500)
            });
            const speed = 0.5;
            const delay = "-=0.4";
            const transform = -10;

            const logo = [{
                    name: 'charM',
                    selector: document.querySelector('.logo__char-m'),
                    move: transform,
                    width: null,
                },
                {
                    name: 'charU',
                    selector: document.querySelector('.logo__char-u'),
                    move: transform,
                    width: null,
                },
                {
                    name: 'squarePrimary',
                    selector: document.querySelector('.logo__square-primary'),
                    width: document.querySelector('.logo__square-primary').width.baseVal.value,
                },
                {
                    name: 'charT',
                    selector: document.querySelector('.logo__char-t'),
                    move: transform,
                    width: null,
                },
                {
                    name: 'charI',
                    selector: document.querySelector('.logo__char-i'),
                    move: transform,
                    width: null,
                },
                {
                    name: 'squareSecondary',
                    selector: document.querySelector('.logo__square-secondary'),
                    move: transform,
                    width: document.querySelector('.logo__square-secondary').width.baseVal.value,
                },
                {
                    name: 'charN',
                    selector: document.querySelector('.logo__char-n'),
                    move: transform,
                    width: null,
                },
                {
                    name: 'groupA',
                    selector: document.querySelector('.logo__group-a'),
                    move: transform,
                    width: null,
                }
            ];

            logo.forEach(item => {
                if (item.name === 'squarePrimary' || item.name === 'squareSecondary') {
                    tl.set(item.selector, {
                        width: 0,
                        transform: 'translateX(' + item.move + 'px)',
                        opacity: 1
                    });
                } else {
                    tl.set(item.selector, {
                        transform: 'translateX(' + item.move + 'px)',
                        opacity: 0
                    });
                }
            });
            logo.forEach(item => {
                if (item.name === 'squarePrimary' || item.name === 'squareSecondary') {
                    tl.to(item.selector, speed, {
                        width: item.width,
                        transform: 'translateX(0px)',
                        opacity: 1,
                        ease: Expo.easeInOut
                    }, delay);
                } else {
                    tl.to(item.selector, speed, {
                        transform: 'translateX(0px)',
                        opacity: 1,
                        ease: Expo.easeInOut
                    }, delay);
                }
            });
        }, 1000)

        // Object.keys(logo).forEach(item => {
        //     tl.set(logo[item], {
        //         transform: 'translateX(-10px)',
        //         opacity: 0
        //     });
        // });

        // Object.keys(squares).forEach(item => {
        //     tl.set(squares[item], {
        //         transform: 'translateX(-10px)',
        //         opacity: 0,
        //         width: 0
        //     });
        // });

        // Object.keys(logo).forEach(item => {
        //     tl.to(logo[item], 0.5, {
        //         transform: 'translateX(0px)',
        //         opacity: 1,
        //         ease: Expo.easeInOut
        //     }, "-=0.4");
        // });


        // tl.set(logo.squarePrimary, {
        //     width: 0,
        //     transform: 'translateX(-10px)',
        // });
        // tl.set(logo.squareSecondary, {
        //     width: 0,
        //     transform: 'translateX(-10px)',
        // });
        // tl.to(logo.squareSecondary, 1, {
        //     width: logo.squarePrimary.width.baseVal.value,
        //     opacity: 1,
        //     transform: 'translateX(0px)',
        //     ease: Expo.easeInOut
        // });
        // tl.to(logo.squarePrimary, 1, {
        //     width: logo.squarePrimary.width.baseVal.value,
        //     opacity: 1,
        //     transform: 'translateX(0px)',
        //     ease: Expo.easeInOut
        // }, "-=0.8");

        // Basic default transition, with no rules and minimal hooks…
        barba.init({
            debug: true,
            transitions: [{
                // leave(data) {
                //     const done = this.async();
                //     TweenMax.set(transitionLayer, {
                //         bottom: 0,
                //         top: 'auto'
                //     });
                //     TweenMax.set(transitionLogo1, {
                //         width: 0,
                //         bottom: -100
                //     }); //transition-2
                //     // TweenMax.set(transitionLogo2, {
                //     //     width: 0,
                //     //     bottom: -60
                //     // }); //transition-2
                //     TweenMax.to(data.current.container, 1, {
                //         transform: 'translateY(-60px)',
                //         ease: Expo.easeInOut
                //     });
                //     TweenMax.to(transitionLayer, 1, {
                //         height: window.innerHeight,
                //         ease: Expo.easeInOut
                //     });
                //     TweenMax.to(transitionLogo1, 1, {
                //         width: '100vw',
                //         bottom: -60,
                //         ease: Expo.easeInOut,
                //         onComplete: (e) => {
                //             done();
                //         }
                //     }).delay(0.2); //transition-2
                //     // TweenMax.to(transitionLogo2, 1, {
                //     //     width: '100vw',
                //     //     ease: Expo.easeInOut,
                //     //     onComplete: (e) => {
                //     //         done();
                //     //     }
                //     // }).delay(0.8); //transition-2  
                // },
                // afterLeave(data) {
                //     const done = this.async();
                //     app.destroyAll(data.current.container);
                //     done();
                // },
                // enter(data) {
                //     const done = this.async();
                //     app.onPageInit();
                //     TweenMax.to(transitionLogo1, 1, {
                //         bottom: -100,
                //         ease: Expo.easeInOut
                //     }); //transition-2
                //     // TweenMax.to(transitionLogo2, 1, {
                //     //     bottom: -100,
                //     //     ease: Expo.easeInOut,
                //     // }); //transition-2
                //     TweenMax.to(transitionLayer, 1, {
                //         height: 0,
                //         ease: Expo.easeInOut,
                //         onComplete: (e) => {
                //             done();
                //         }
                //     }); //transition-2
                // },
                /////////////////////////////////////////////
                leave(data) {
                    const done = this.async();
                    TweenMax.set(transitionLayer, {
                        bottom: 0,
                        top: 'auto'
                    });
                    TweenMax.set(transitionLogo, {
                        transform: 'translateY(-20px)',
                        opacity: 0
                    });
                    // TweenMax.set(data.current.container, {
                    //     filter: 'grayscale(0)'
                    // });
                    // TweenMax.to(data.current.container, 1, {
                    //     filter: 'grayscale(100%)',
                    //     ease: Expo.easeInOut
                    // });
                    TweenMax.to(data.current.container, 1, {
                        transform: 'translateY(-60px)',
                        ease: Expo.easeInOut
                    }).delay(0.3);
                    TweenMax.to(transitionLayer, 1, {
                        height: window.innerHeight,
                        ease: Expo.easeInOut
                    }).delay(0.3);
                    TweenMax.to(transitionLogo, 1, {
                        transform: 'translateY(0)',
                        opacity: 1,
                        ease: Expo.easeInOut,
                        onComplete: (e) => {
                            done();
                        }
                    }).delay(0.8);
                },
                afterLeave(data) {
                    const done = this.async();
                    app.destroyAll(data.current.container);
                    done();
                },
                enter(data) {
                    const done = this.async();
                    app.onPageInit();
                    // TweenMax.set(data.next.container, {
                    //     filter: 'grayscale(100%)'
                    // });
                    TweenMax.to(transitionLogo, 1, {
                        transform: 'translateY(20px)',
                        opacity: 0,
                        ease: Expo.easeInOut
                    }).delay(0.3);
                    TweenMax.to(transitionLayer, 1, {
                        height: 0,
                        top: 0,
                        bottom: 'auto',
                        ease: Expo.easeInOut,
                        onComplete: (e) => {
                            done();
                        }
                    }).delay(0.3);
                    // TweenMax.to(data.next.container, 1, {
                    //     filter: 'grayscale(0)',
                    //     ease: Expo.easeInOut,
                    //     onComplete: (e) => {
                    //         done();
                    //     }
                    // }).delay(1);
                },
                ////////////////////////////////////////////////////
                // leave(data) {
                //     const done = this.async();
                //     TweenMax.set(transitionLayer, {
                //         bottom: 0,
                //         top: 'auto'
                //     });
                //     TweenMax.set(transitionLogo, {
                //         transform: 'translateY(-20px)',
                //         opacity: 0
                //     });
                //     TweenMax.set(data.current.container, {
                //         filter: 'blur(0)'
                //     });
                //     TweenMax.to(data.current.container, 1, {
                //         transform: 'translateY(-60px)',
                //         filter: 'blur(10px)',
                //         ease: Expo.easeInOut
                //     });
                //     TweenMax.to(transitionLayer, 1, {
                //         height: window.innerHeight,
                //         ease: Expo.easeInOut
                //     });
                //     TweenMax.to(transitionLogo, 1, {
                //         transform: 'translateY(0)',
                //         opacity: 1,
                //         ease: Expo.easeInOut,
                //         onComplete: (e) => {
                //             done();
                //         }
                //     }).delay(0.4);
                // },
                // afterLeave(data) {
                //     const done = this.async();
                //     app.destroyAll(data.current.container);
                //     done();
                // },
                // enter(data) {
                //     const done = this.async();
                //     app.onPageInit();
                //     TweenMax.set(data.next.container, {
                //         filter: 'blur(6px)',
                //     });
                //     TweenMax.to(transitionLogo, 1, {
                //         transform: 'translateY(20px)',
                //         opacity: 0,
                //         ease: Expo.easeInOut
                //     }).delay(0.3);
                //     TweenMax.to(transitionLayer, 1, {
                //         height: 0,
                //         top: 0,
                //         bottom: 'auto',
                //         ease: Expo.easeInOut,
                //     }).delay(0.3);
                //     TweenMax.to(data.next.container, 0.1, {
                //         filter: 'blur(0px)',
                //         ease: Linear.ease,
                //         onComplete: (e) => {
                //             done();
                //         }
                //     }).delay(1);
                // },
            }, ],
        });
    }

    onPageInit() {
        this.parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));
        Sliders.init();
        Anchors.init(document.querySelector('.anchors__wrapper'), 200);
        setTimeout(x => {
            this.appears = Appears.init();
            Splitting();
        }, 600);
    }

    destroyAll(container) {
        Anchors.destroyAll();
        Sliders.destroyAll();
        container.remove();
    }

    addListeners() {
        window.addEventListener('resize', () => {
            this.onResize();
        });

        window.addEventListener('scroll', Utils.throttle(() => {
            this.onScroll();
        }, 1000 / 25));

        window.addEventListener('wheel', (e) => {
            this.onWheel(e);
        });
    }

    onMouseMove(e) {

    }

    onResize() {
        this.windowRect = new Rect({
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        });
        Navigation.closeNav();
        Navigation.closeSearch();
    }

    onScroll(e) {
        const scrollTop = Dom.scrollTop();

        Navigation.closeNav();
        Navigation.closeSearch();

        // fastscroll mobile
        if (Dom.fastscroll) {
            const newTop = Math.round(scrollTop * 10) / 5;
            if (this.page.previousTop !== newTop) {
                this.page.previousTop = newTop;
                Dom.scrolling = true;
                if (newTop > this.page.previousTop) {
                    this.body.classList.add('scroll-up');
                    this.body.classList.remove('scroll-down');
                } else {
                    this.body.classList.remove('scroll-up');
                    this.body.classList.add('scroll-down');
                }
            } else {
                Dom.scrolling = false;
            }
        }

        //header animation
        if (scrollTop > 300 && !this.body.classList.contains('nav-mobile-open')) {
            this.header.style.top = -this.header.clientHeight + 'px';
            this.header.style.transition = 'top .5s ' + this.smooth;

            if (this.anchorPanel) {
                this.anchorPanel.style.top = -this.anchorPanel.clientHeight + 'px';
                this.anchorPanel.style.transition = 'top .5s ' + this.smooth;
            }

            if (this.body.classList.contains('scroll-down')) {
                this.header.style.top = 0;
                if (this.anchorPanel) {
                    this.anchorPanel.style.top = -this.anchorPanel.clientHeight + 'px';
                }
            } else {
                this.header.style.top = -this.header.clientHeight + 'px';
                if (this.anchorPanel) {
                    this.anchorPanel.style.top = 0;
                }
            }
        }
    }

    onWheel(e) {
        if (e.deltaY > 0) {
            this.body.classList.add('scroll-up');
            this.body.classList.remove('scroll-down');
        } else {
            this.body.classList.remove('scroll-up');
            this.body.classList.add('scroll-down');
        }
    }

    render() {

        // smoothscroll desktop
        // if (!Dom.overscroll && !Dom.touch) {
        if (!Dom.fastscroll) {
            if (this.body.offsetHeight !== this.page.offsetHeight) {
                this.body.setAttribute('style', `height: ${this.page.offsetHeight}px;`);
                /*
                TweenMax.set(this.body, {
                	height: this.page.offsetHeight,
                });
                */
            }
            const scrollTop = Dom.scrollTop();
            let newTop = this.page.previousTop || 0;
            newTop += (scrollTop - newTop) / scrollSpeed;
            if (Math.abs(scrollTop - newTop) < 0.15) {
                newTop = scrollTop;
            }
            if (newTop !== undefined && !Number.isNaN(newTop) && this.page.previousTop !== newTop) {
                this.page.previousTop = newTop;
                // this.page.setAttribute('style', `top: ${-newTop}px;`);
                this.page.setAttribute('style', `transform: translateY(${-newTop}px);`);
                /*
                TweenMax.set(this.page, {
                	y: -newTop,
                });
                */
                Dom.scrolling = true;
            } else {
                Dom.scrolling = false;
            }
        } else if (this.body.hasAttribute('style')) {
            this.body.removeAttribute('style');
            this.page.removeAttribute('style');
        }

        //parallax
        this.parallaxes.forEach((node, i) => {
            const fullHeight = node.parentNode.classList.contains('picture--full-height');
            const parallax = node.parallax || (node.parallax = parseInt(node.getAttribute('data-parallax')) || 5) * 2;
            const direction = i % 2 === 0 ? 1 : -1;
            let currentY = node.currentY || 0;
            let rect = Rect.fromNode(node);
            rect = new Rect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
            const intersection = rect.intersection(this.windowRect);
            /*
            if (fullHeight) {
            	console.log(intersection);
            }
            */
            if (intersection.y > 0) {
                const y = intersection.center.y; // Math.min(1, Math.max(-1, intersection.center.y));
                const s = (100 + parallax * 2) / 100;
                currentY = ((fullHeight ? 0 : -50) + (y * parallax * direction)).toFixed(3);
                if (node.currentY !== currentY) {
                    node.currentY = currentY;
                    if (fullHeight) {
                        node.setAttribute('style', `height: ${s * 100}%; top: 0; left: 0; transform: translateX(0) translateY(${currentY}%);`);
                    } else {
                        node.setAttribute('style', `height: ${s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${currentY}%);`);
                    }
                }
            }
        });

        // appears
        this.appears.forEach((node, i) => {
            let rect = Rect.fromNode(node);
            const intersection = rect.intersection(this.windowRect);
            if (intersection.y > 0.0) {
                if (!node.to) {
                    node.to = setTimeout(() => {
                        node.classList.add('appeared');
                    }, 150 * node.appearingIndex);
                }
            } else {
                if (node.classList.contains('appeared')) {
                    node.to = null;
                    node.classList.remove('appeared');
                }
            }
        });

    }

    loop() {
        this.render();
        if (this.playing) {
            window.requestAnimationFrame(() => {
                this.loop();
            });
        }
    }

    play() {
        this.playing = true;
        this.loop();
    }

    pause() {
        this.playing = false;
    }

}

var app = new App();

window.onload = () => {
    app.init();
    app.play();
};