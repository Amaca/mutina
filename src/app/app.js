/* jshint esversion: 6 */
/* global window, document, Swiper, TweenMax, TimelineMax */

import "@babel/polyfill";
import barba from '@barba/core';
import "css-vars-ponyfill";
import Anchors from './shared/anchors';
import Appears from './shared/appears';
import Dom from './shared/dom';
import Fancy from "./shared/fancy";
import FancyViewAll from "./shared/fancy.view-all";
import Filters from './shared/filters';
import LazyLoad from './shared/lazyload';
import Navigation from "./shared/navigation";
import Rect from './shared/rect';
import Samples from "./shared/samples";
import Sliders from './shared/sliders';
import Utils from './shared/utils';

//settings
let menuStyle = 1;
let scrollSpeed = 8;
const activateIntro = false;
const barbaDebug = true;
const disableBarba = false;

export default class App {

    constructor() {}

    init() {
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        const header = document.querySelector('.header');
        const smooth = 'cubic-bezier(0, 0.97, 0.43, 1)';

        Dom.detect(body);
        const mouse = {
            x: 0,
            y: 0
        };
        this.body = body;
        this.page = page;
        this.header = header;
        this.smooth = smooth;
        this.appears = [];
        this.parallaxes = [];
        this.onResize();
        this.addListeners();
        this.transitions();

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
        const textFront = document.querySelector('.transition__text .box--front .text');
        const textBack = document.querySelector('.transition__text .box--back .text');
        const boxBack = document.querySelector('.transition__text .box--back');
        const line = document.querySelector('.transition__line');

        if (!disableBarba) {
            barba.init({
                timeout: 5000,
                debug: barbaDebug,
                transitions: [{
                        name: 'default',
                        appear(data) {
                            const done = this.async();
                            const transitionLayer = document.querySelector('.transition');
                            const logoWrapper = document.querySelector('.transition .logo__wrapper');
                            if (activateIntro) {
                                let tl = new TimelineMax();
                                const speed = 0.5;
                                const transform = -10;
                                tl.timeScale(0.9);

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

                                tl.set(transitionLayer, {
                                    height: window.innerHeight + 2,
                                });

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

                                logo.forEach((item, index) => {
                                    let delay = '-=0.4';
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
                                            ease: Expo.easeInOut,
                                            onComplete: () => {
                                                if (index === logo.length - 1) {
                                                    console.log('pageinit');
                                                    app.onPageInit();
                                                }
                                            }
                                        }, delay);
                                    }
                                });

                                tl.to(logoWrapper, 0.8, {
                                    height: 0,
                                    ease: Expo.easeInOut,
                                }, '+=0.5');

                                tl.to(transitionLayer, 1, {
                                    height: 2,
                                    top: app.header.clientHeight - 2,
                                    bottom: 'auto',
                                    ease: Expo.easeInOut,
                                    onComplete: function () {
                                        transitionLayer.style.height = 0;
                                        transitionLayer.classList.add('transition--no-top-line');
                                        done();
                                    }
                                }, '-=0.6');
                            } else {
                                app.onPageInit();
                                TweenMax.set(transitionLayer, {
                                    height: 0,
                                    top: 0,
                                    bottom: 'auto',
                                });
                                transitionLayer.classList.add('transition--no-top-line');
                                done();
                            }
                        },
                        /////////////////////////////////////////////
                        leave(data) {
                            const done = this.async();
                            const title = data.trigger !== 'popstate' ? data.trigger.getAttribute('data-transition') : 'Mutina';

                            textFront.innerHTML = '';
                            textBack.innerHTML = '';
                            textFront.innerHTML = title;
                            textBack.innerHTML = title;
                            Navigation.closeNav();
                            Navigation.closeSearch();
                            TweenMax.set(transitionLayer, {
                                backgroundColor: '#CFCFCF',
                                width: window.innerWidth,
                                bottom: 0,
                                opacity: 1,
                                top: 'auto',
                                height: 0,
                            });
                            TweenMax.set(textFront, {
                                transform: 'translateY(100%)',
                                opacity: 1
                            });
                            TweenMax.set(textBack, {
                                transform: 'translateY(0)',
                            });
                            TweenMax.set(boxBack, {
                                width: 0,
                            });
                            TweenMax.set(line, {
                                width: 0,
                            });
                            TweenMax.to(data.current.container, 1, {
                                transform: 'translateY(-60px)',
                                ease: Expo.easeInOut
                            }).delay(0.3);
                            TweenMax.to(transitionLayer, 1, {
                                height: window.innerHeight,
                                ease: Expo.easeInOut
                            }).delay(0.3);
                            TweenMax.to(textFront, 1, {
                                transform: 'translateY(0)',
                                ease: Expo.easeInOut,
                            }).delay(0.4);
                            TweenMax.to(line, 1, {
                                width: '100%',
                                ease: Expo.easeInOut,
                            }).delay(1.2);
                            TweenMax.to(boxBack, 1, {
                                width: '100%',
                                ease: Expo.easeInOut,
                                onComplete: (e) => {
                                    done();
                                }
                            }).delay(1.2);
                        },
                        afterLeave(data) {
                            const done = this.async();
                            app.destroyAll(data.current.container);
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            app.onPageInit();
                            /*
                            window.daraLayer.push({

                            })
                            gtm.push({
                                title: document.title,
                                href: window.href
                            })
                            */
                            done();
                        },
                        enter(data) {
                            const done = this.async();
                            window.scrollTo(0, 0);
                            TweenMax.to(textBack, 1, {
                                transform: 'translateY(-100%)',
                                ease: Expo.easeInOut,
                            }).delay(0.1);
                            TweenMax.to(textFront, 1, {
                                transform: 'translateY(-100%)',
                                ease: Expo.easeInOut,
                            }).delay(0.1);
                            TweenMax.to(transitionLayer, 1, {
                                height: 0,
                                top: 0,
                                bottom: 'auto',
                                ease: Expo.easeInOut,
                                onComplete: (e) => {
                                    done();
                                }
                            }).delay(0.3);
                        },
                        ////////////////////////////////////////////////////
                    },
                    {
                        name: 'fast-transition',
                        from: {
                            custom: ({
                                trigger
                            }) => {
                                return trigger.classList && trigger.classList.contains('fast-transition');
                            },
                        },
                        leave(data) {
                            const done = this.async();
                            console.log('fadeOut');
                            done();
                        },
                        afterLeave(data) {
                            const done = this.async();
                            app.destroyAll(data.current.container);
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            app.onPageInit();
                            done();
                        },
                        enter(data) {
                            const done = this.async();
                            console.log('fadeIn');
                            done();
                        },
                    },
                    {
                        name: 'fancy-transition',
                        from: {
                            custom: ({
                                trigger
                            }) => {
                                return trigger.classList && trigger.classList.contains('fancy-transition');
                            },
                        },
                        leave(data) {
                            const done = this.async();
                            Navigation.closeNav();
                            Navigation.closeSearch();
                            TweenMax.set(line, {
                                width: 0,
                            });
                            TweenMax.set(transitionLayer, {
                                backgroundColor: '#CFCFCF',
                                width: window.innerWidth,
                                bottom: 0,
                                opacity: 1,
                                top: 'auto',
                                height: 0,
                            });
                            TweenMax.to(data.current.container, 1, {
                                transform: 'translateY(-60px)',
                                ease: Expo.easeInOut
                            }).delay(0.3);
                            TweenMax.to(transitionLayer, 1, {
                                height: window.innerHeight,
                                ease: Expo.easeInOut,
                                onComplete: (e) => {
                                    done();
                                }
                            }).delay(0.3);
                        },
                        afterLeave(data) {
                            const done = this.async();
                            app.destroyAll(data.current.container);
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            app.onPageInit();
                            done();
                        },
                        enter(data) {
                            const done = this.async();
                            window.scrollTo(0, 0);
                            TweenMax.to(transitionLayer, 1, {
                                width: 422,
                                top: 0,
                                bottom: 'auto',
                                backgroundColor: '#121212',
                                ease: Expo.easeInOut,
                            });
                            TweenMax.to(transitionLayer, 1, {
                                opacity: 0,
                                ease: Expo.easeInOut,
                                onComplete: (e) => {
                                    done();
                                }
                            }).delay(0.3);
                        },
                    }
                ],
            });
        } else {
            const transition = document.querySelector('.transition');
            transition.remove();
            this.onPageInit();
        }
    }

    setFancySidebar() {
        if (document.querySelector('.fancy-detail')) {
            const sidebar = document.querySelector('.fancy-detail__sidebar');
            const sidebarClone = sidebar.cloneNode(true);
            this.body.classList.add('fancy-page');
            this.body.appendChild(sidebarClone);
            sidebar.remove();
        } else if (document.querySelector('.fancy-detail__sidebar')) {
            const sidebar = document.querySelector('.fancy-detail__sidebar');
            this.body.classList.remove('fancy-page');
            sidebar.remove();
        }
    }

    onPageInit() {
        this.parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));
        LazyLoad.init();
        Sliders.init();
        Anchors.init(document.querySelector('.anchors__wrapper'), 200);
        Fancy.init();
        FancyViewAll.init();
        Samples.init();
        Utils.toggleGrid();
        Filters.init();
        this.setFancySidebar();

        setTimeout(x => {
            this.appears = Appears.init();
            if (window.innerWidth > 768) {
                Splitting();
            }
        }, 600);
    }

    destroyAll(container) {
        Anchors.destroyAll();
        Sliders.destroyAll();
        Fancy.destroyAll();
        Samples.destroyAll();
        FancyViewAll.destroyAll();
        Filters.destroyAll();
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
        const anchorPanel = document.querySelector('.anchors');
        const filterPanel = document.querySelector('.filters');

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
        if (this.header && scrollTop > 300 && !this.body.classList.contains('nav-mobile-open')) {
            this.header.style.top = -this.header.clientHeight + 'px';
            this.header.style.transition = 'top .15s linear';

            if (anchorPanel) {
                anchorPanel.style.top = -anchorPanel.clientHeight + 'px';
                anchorPanel.style.transition = 'top .15s linear';
            }

            if (this.body.classList.contains('scroll-down')) {
                this.header.style.top = 0;
                if (anchorPanel) {
                    anchorPanel.style.top = -anchorPanel.clientHeight + 'px';
                }
            } else {
                this.header.style.top = -this.header.clientHeight + 'px';
                if (anchorPanel) {
                    anchorPanel.style.top = 0;
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
            const parallax = node.parallax || (node.parallax = parseInt(node.getAttribute('data-parallax')) || 5) * 3;
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
                currentY = ((-50) + (y * parallax * direction)).toFixed(3);
                if (node.currentY !== currentY) {
                    node.currentY = currentY;
                    node.setAttribute('style', `height: ${s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${currentY}%);`);
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

        LazyLoad.render(this.windowRect);

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