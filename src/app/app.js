/* jshint esversion: 6 */
/* global window, document, Swiper, TweenMax, TimelineMax */

import "@babel/polyfill";
import barba from '@barba/core';
import cssVars from 'css-vars-ponyfill';
import Anchors from './shared/anchors';
import Appears from './shared/appears';
import CustomSelect from './shared/custom.select';
import Dom from './shared/dom';
import Fancy from './shared/fancy';
import FancyDetail from './shared/fancy.detail';
import FancyViewAll from "./shared/fancy.view-all";
import Filters from './shared/filters';
import Follower from './shared/follower';
import Forms from './shared/forms';
import Grid from './shared/grid';
import LazyLoad from './shared/lazyload';
import Navigation from "./shared/navigation";
import Rect from './shared/rect';
import Samples from './shared/samples';
import ScrollAnchors from "./shared/scroll.anchors";
import SidePanel from './shared/side.panel';
import Sliders from './shared/sliders';
import Tabs from './shared/tabs';
import ToggleSearch from './shared/toggle.search';
import Utils from './shared/utils';
import Wishlist from './shared/wishlist';

const debug = false;
const barbaDebug = debug;

window.debug__ = (...args) => {
    if (debug) {
        console.log(...args);
    }
};
window.log__ = (...args) => {
    console.log(...args);
};
window.error__ = (...args) => {
    console.error(...args);
};

// settings
let scrollSpeed = 8;
const activateIntro = false;
let disableBarba = false;
const breakTransition = false;
let smoothScroll = true;
const disableRender = false;

let firstLoad = false;
let scrollPosition = '';

const userAgent = navigator.userAgent.toLowerCase();
const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

export default class App {

    constructor() {}

    init() {
        if (isIE11) {
            this.polyfill();
            cssVars();
            document.querySelector('body').classList.add('ie11');
        }
        log__('%c Coded by Websolute ', 'background: #01c0f6; color: #fff; border-radius: 20px; padding: 10px;');
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        const header = document.querySelector('.header');
        const smooth = 'cubic-bezier(0, 0.97, 0.43, 1)';

        const follower = new Follower(document.querySelector('.follower'));
        const hrefs = [].slice.call(document.querySelectorAll('[href="#"]'));
        const links = [].slice.call(document.querySelectorAll('.btn'));

        Dom.detect(body);
        const mouse = {
            x: 0,
            y: 0
        };
        if (follower.enabled) {
            body.classList.add('follower-enabled');
        }
        this.body = body;
        this.page = page;
        this.header = header;
        this.smooth = smooth;
        this.appears = [];
        this.parallaxes = [];
        this.follower = follower;
        this.hrefs = hrefs;
        this.links = links;
        this.mouse = mouse;
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
        firstLoad = true;
        Navigation.init();
        CustomSelect.init();
        body.classList.add('ready');

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        if (this.body.classList.contains('safari')) {
            smoothScroll = false;
        }

        if (!smoothScroll) {
            Dom.fastscroll = true;
            this.body.classList.add('fastscroll');
        }
    }

    static initScript(data) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(data.next.html, "text/html");

        var scripts = doc.querySelectorAll('script[data-products]');
        if (scripts) {
            scripts.forEach(function (x) {
                window.eval(x.innerHTML);
            });
        }
    }

    animateTransitionLine(done) {
        const line = document.querySelector('.transition__line');
        const boxBack = document.querySelector('.transition__text .box--back');
        let perfData = window.performance.timing,
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100,
            start = 0,
            end = 100,
            duration = time;
        let range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(function () {
            current += increment;
            TweenMax.to(line, time, {
                width: current + '%',
                ease: Expo.easeInOut,
            });
            TweenMax.to(boxBack, time, {
                width: current + '%',
                ease: Expo.easeInOut,
            });
            //debug__('current', current);
            if (current == end) {
                clearInterval(timer);
                done();
            }
        }, stepTime);
    }

    transitions() {
        const transitionLayer = document.querySelector('.transition');
        const textFront = document.querySelector('.transition__text .box--front .text');
        const textBack = document.querySelector('.transition__text .box--back .text');
        const boxBack = document.querySelector('.transition__text .box--back');
        const line = document.querySelector('.transition__line');
        const page = this.page;

        if (!disableBarba) {
            barba.init({
                cacheIgnore: true,
                prefetchIgnore: true,
                timeout: 20000,
                debug: barbaDebug,
                transitions: [{
                        name: 'default',
                        appear(data) {
                            const done = this.async();
                            try {
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
                                    TweenMax.set(transitionLayer, {
                                        height: 0,
                                        top: 0,
                                        bottom: 'auto',
                                    });
                                    TweenMax.set(logoWrapper, {
                                        height: 0,
                                    });
                                    app.onPageInit();
                                    transitionLayer.classList.add('transition--no-top-line');
                                    done();
                                }
                            } catch (e) {
                                error__(e);
                            }
                        },
                        /////////////////////////////////////////////
                        beforeLeave() {
                            LazyLoad.items = [];
                        },
                        leave(data) {
                            const done = this.async();
                            try {
                                const title = data.trigger !== 'popstate' ? data.trigger.getAttribute('data-transition') : 'Mutina';
                                let timeDelay = 0;
                                if (data.trigger !== 'popstate' && data.trigger.getAttribute('data-origin') === 'panel') {
                                    timeDelay = 300;
                                }
                                // setTimeout(() => {
                                textFront.innerHTML = '';
                                textBack.innerHTML = '';
                                textFront.innerHTML = title;
                                textBack.innerHTML = title;
                                Navigation.reset();
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
                                    onComplete: (e) => {
                                        done();
                                    }
                                }).delay(0.4);
                                // }, timeDelay);
                            } catch (e) {
                                error__(e);
                            }
                        },
                        afterLeave(data) {
                            const done = this.async();
                            try {
                                app.destroyAll(data.current.container);
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            try {
                                App.initScript(data);
                                if (breakTransition) {
                                    throw new Error('stop!');
                                }
                                app.animateTransitionLine(done);
                                app.onPageInit();
                                /*
                                window.daraLayer.push({})
                                gtm.push({
                                    title: document.title,
                                    href: window.href
                                })
                                */
                            } catch (e) {
                                error__(e);
                            }
                        },
                        enter(data) {
                            const done = this.async();
                            try {
                                app.scrollTo(0, false);
                                app.header.style.top = 0;
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
                            } catch (e) {
                                error__(e);
                            }
                        }
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
                        beforeLeave() {
                            Dom.freezeScroll();
                            const done = this.async();
                            LazyLoad.items = [];
                            done();
                        },
                        leave(data) {
                            const done = this.async();
                            //scrollPosition = document.querySelector('.page').style.transform.replace(/[^\d.]/g, '');
                            //debug__('SCROLLPOSITION'scrollPosition);
                            done();
                        },
                        afterLeave(data) {
                            const done = this.async();
                            try {
                                app.destroyAll(data.current.container);
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            try {
                                App.initScript(data);
                                app.onPageInit();
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        enter(data) {
                            const done = this.async();
                            try {
                                // set scroll height
                                // resume scroll
                                Dom.resumeScroll();
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        }
                    },
                    {
                        name: 'fancy-in-transition',
                        from: {
                            custom: ({
                                trigger
                            }) => {
                                return trigger.classList && trigger.classList.contains('fancy-in-transition');
                            },
                        },
                        beforeLeave() {
                            LazyLoad.items = [];
                        },
                        leave(data) {
                            const done = this.async();
                            try {
                                Navigation.reset();
                                //set scroll position
                                if (Dom.fastscroll) {
                                    scrollPosition = window.pageYOffset;
                                } else {
                                    scrollPosition = document.querySelector('.page').style.transform.replace(/[^\d.]/g, '');
                                }
                                TweenMax.set(line, {
                                    width: 0,
                                });
                                TweenMax.set(transitionLayer, {
                                    backgroundColor: '#CFCFCF',
                                    bottom: 0,
                                    opacity: 1,
                                    top: 'auto',
                                    height: 0,
                                });
                                TweenMax.to(data.current.container, 1, {
                                    transform: 'translateY(-60px)',
                                    ease: Expo.easeInOut
                                });
                                TweenMax.to(transitionLayer, 1, {
                                    height: window.innerHeight,
                                    ease: Expo.easeInOut,
                                });
                                TweenMax.to(transitionLayer, 0.8, {
                                    backgroundColor: '#ffffff',
                                    ease: Power1.easeOut,
                                    onComplete: (e) => {
                                        done();
                                    }
                                }).delay(0.4);
                            } catch (e) {
                                error__(e);
                            }
                        },
                        afterLeave(data) {
                            const done = this.async();
                            try {
                                app.destroyAll(data.current.container);
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            try {
                                App.initScript(data);
                                app.onPageInit();
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        enter(data) {
                            const done = this.async();
                            try {
                                const sidebar = document.querySelector('.fancy-detail__sidebar');
                                transitionLayer.style.pointerEvents = 'none';
                                app.scrollTo(0, true);
                                TweenMax.set(sidebar, {
                                    left: -sidebar.clientWidth
                                });
                                TweenMax.to(transitionLayer, 1, {
                                    opacity: 0,
                                    ease: Expo.easeInOut,
                                });
                                TweenMax.to(sidebar, 1.5, {
                                    left: 0,
                                    ease: Expo.easeInOut,
                                    onComplete: (e) => {
                                        done();
                                    }
                                });
                            } catch (e) {
                                error__(e);
                            }
                        }
                    },
                    {
                        name: 'fancy-out-transition',
                        from: {
                            custom: ({
                                trigger
                            }) => {
                                return trigger.classList && trigger.classList.contains('fancy-out-transition');
                            },
                        },
                        beforeLeave() {
                            LazyLoad.items = [];
                        },
                        leave(data) {
                            const done = this.async();
                            try {
                                const sidebar = document.querySelector('.fancy-detail__sidebar');
                                const panel = document.querySelector('.fancy-detail__panel');
                                transitionLayer.style.pointerEvents = 'all';
                                if (window.innerWidth > 768) {
                                    TweenMax.to(sidebar, 1, {
                                        left: -sidebar.clientWidth - 10,
                                        ease: Expo.easeInOut,
                                    });
                                } else {
                                    TweenMax.to(sidebar, 1, {
                                        opacity: 0,
                                        transform: 'translateY(60px)',
                                        ease: Expo.easeInOut,
                                    });
                                    TweenMax.to(panel, 1, {
                                        bottom: -panel.clientHeight,
                                        ease: Expo.easeInOut,
                                    });
                                }
                                TweenMax.to(data.current.container, 1, {
                                    opacity: 0,
                                    transform: 'translateY(100px)',
                                    ease: Expo.easeInOut,
                                    onComplete: (e) => {
                                        done();
                                    }
                                });
                            } catch (e) {
                                error__(e);
                            }
                        },
                        afterLeave(data) {
                            const done = this.async();
                            try {
                                TweenMax.set(transitionLayer, {
                                    top: 'auto',
                                    bottom: 0,
                                    height: window.innerHeight,
                                    backgroundColor: '#ffffff',
                                    opacity: 1,
                                });
                                app.destroyAll(data.current.container);
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        beforeEnter(data) {
                            const done = this.async();
                            try {
                                App.initScript(data);
                                app.onPageInit();
                            } catch (e) {
                                error__(e);
                            }
                            done();
                        },
                        enter(data) {
                            const done = this.async();
                            try {
                                // scroll to scroll position
                                setTimeout(x => {
                                    if (Dom.fastscroll) {
                                        app.scrollTo(scrollPosition, true);
                                    } else {
                                        app.scrollTo(Number(scrollPosition), true);
                                    }
                                    scrollPosition = 0;
                                }, 100);
                                TweenMax.to(transitionLayer, 1, {
                                    height: 0,
                                    backgroundColor: '#CFCFCF',
                                    ease: Expo.easeInOut,
                                    onComplete: (e) => {
                                        done();
                                    }
                                });
                            } catch (e) {
                                error__(e);
                            }
                        }
                    }
                ],
            });
        } else {
            debug__('barba disabled');
            const transition = document.querySelector('.transition');
            transition.remove();
            this.onPageInit();
        }
    }

    scrollTo(top, setHeader) {
        window.scrollTo(0, top);
        if (setHeader) {
            this.header.style.top = top;
        }
        this.page.previousTop = top + 1;
    }

    updateViewPortHeight() {
        if (Dom.fastscroll) {
            let vh = window.innerHeight * 0.01;
            if (this.vh !== vh) {
                this.vh = vh;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }
        }
    }

    onPageInit() {

        this.parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));
        this.pictures = [].slice.call(document.querySelectorAll('.picture img'));

        this.pictures.forEach(picture => {
            if (!picture.classList.contains('picture__secondary') && !picture.parentNode.classList.contains('picture__container')) {
                let wrapper = document.createElement('div');
                wrapper.classList.add('picture__container');
                picture.parentNode.insertBefore(wrapper, picture);
                wrapper.appendChild(picture);
            }
        });

        this.accentsInit();
        this.updateViewPortHeight();

        LazyLoad.init();
        Fancy.init();
        if (Dom.fastscroll) {
            FancyViewAll.onScroll = () => {
                this.onScrollDidChange();
            }; //per attivare lazyload senza smooth scroll su gallery
        }
        FancyViewAll.init();
        FancyDetail.init();
        Sliders.init();
        Anchors.init();
        ScrollAnchors.init();
        Samples.onScroll = () => {
            if (Dom.fastscroll) {
                this.onScrollDidChange();
            }
        }; //per attivare lazyload senza smooth scroll su campioni
        Samples.init();
        Utils.toggleGrid();
        if (typeof _products != 'undefined') {
            Filters.init();
        }
        ToggleSearch.init();
        Grid.init();
        SidePanel.init();
        CustomSelect.init();
        Tabs.init();
        Forms.init();
        Wishlist.init();

        const fancyInTransition = [...document.querySelectorAll('.fancy-in-transition img')];
        Follower.addMouseListener(fancyInTransition);

        let delay = firstLoad ? 0 : 600;
        firstLoad = false;

        setTimeout(x => {
            this.appears = Appears.init();
            //if (window.innerWidth > 768) {
            window.Splitting();
            if (document.querySelector('.cover .eyelet')) {
                setTimeout(x => {
                    document.querySelector('.cover .eyelet').classList.add('eyelet--loaded');
                }, 1000)
            }
            //}
            if (Dom.fastscroll) {
                app.onScrollDidChange();
            }
        }, delay);
    }

    destroyAll(container) {
        Anchors.destroyAll();
        ScrollAnchors.destroyAll();
        Sliders.destroyAll();
        Fancy.destroyAll();
        Samples.destroyAll();
        FancyViewAll.destroyAll();
        FancyDetail.destroyAll();
        Filters.destroyAll();
        ToggleSearch.destroyAll();
        Grid.destroyAll();
        SidePanel.destroyAll();
        CustomSelect.destroyAll();
        Tabs.destroyAll();
        Forms.destroyAll();
        Wishlist.destroyAll();
        LazyLoad.destroyAll();
        const fancyInTransition = [...document.querySelectorAll('.fancy-in-transition .picture img')];
        Follower.removeMouseListener(fancyInTransition);

        container.remove();
    }

    accentsInit() {
        const coverVideo = document.querySelector('main.main--accents > .cover--video');
        const headerWrapper = document.querySelector('.header__wrapper');
        const video = document.querySelector('video');
        const headerSearch = document.querySelector('.header__search input.search-btn');
        const subnavs = [...document.querySelectorAll('.subnav')];
        const toggle = document.querySelector('.nav__toggle-bg');

        if (coverVideo) {
            this.body.classList.add('accents-page');
            const style = coverVideo.getAttribute('style');
            this.header.style.cssText = style;
            if (window.innerWidth <= 768) {
                headerSearch.style.cssText = style;
                headerWrapper.style.cssText = style;
                toggle.style.cssText = style;
            }

            subnavs.forEach(x => x.style.cssText = style);
            setTimeout(x => {
                video.play();
                debug__('Video cover: play');
            }, 200);
        } else if (this.body.classList.contains('accents-page')) {
            this.body.classList.remove('accents-page');
            this.header.removeAttribute('style');
            if (window.innerWidth <= 768) {
                headerSearch.removeAttribute('style');
                headerWrapper.removeAttribute('style');
                toggle.removeAttribute('style');
            }
            subnavs.forEach(x => x.removeAttribute('style'));
            if (video) {
                video.stop();
            }
        }
    }

    addListeners() {
        window.addEventListener('resize', () => {
            this.onResize();
        });

        window.addEventListener('scroll', Utils.throttle(() => {
            this.onScroll();
        }, 1000 / 25));

        window.addEventListener('mousemove', (e) => {
            this.onMouseMove(e);
        });

        window.addEventListener('orientationchange', (e) => {
            this.checkDevice();
            this.updateViewPortHeight();
            FancyDetail.orientationChange();
            Tabs.resetAll();
        });
    }

    onMouseMove(e) {
        this.mouse.x = e.clientX / window.innerWidth - 0.5;
        this.mouse.y = e.clientY / window.innerHeight - 0.5;
        if (this.follower.enabled) {
            this.follower.follow(this.links.map(x => Rect.fromNode(x)));
            this.follower.move({
                x: e.clientX,
                y: e.clientY
            });
        }
    }

    onResize() {
        this.windowRect = this.windowRect || new Rect();
        this.windowRect.width = window.innerWidth;
        this.windowRect.height = window.innerHeight;
        this.windowRect.set(this.windowRect);
        this.checkDevice();
        Navigation.reset(false);
        this.updateViewPortHeight();
    }

    onScroll(e) {
        Navigation.reset(false);
        this.updateViewPortHeight();

        // fastscroll mobile
        const scrollTop = Dom.scrollTop();
        if (Dom.fastscroll) {
            const newTop = Math.round(scrollTop * 10) / 5;
            if (this.page.previousTop !== newTop) {
                Dom.scrolling = true;
                if (newTop > this.page.previousTop) {
                    this.body.classList.add('scroll-up');
                    this.body.classList.remove('scroll-down');
                } else {
                    this.body.classList.remove('scroll-up');
                    this.body.classList.add('scroll-down');
                }
                this.page.previousTop = newTop;
                this.onScrollDidChange();
            } else {
                Dom.scrolling = false;
            }
        } else {
            const diff = scrollTop - this.page.previousTop;
            if (diff > 0) {
                this.body.classList.add('scroll-up');
                this.body.classList.remove('scroll-down');
            } else {
                this.body.classList.remove('scroll-up');
                this.body.classList.add('scroll-down');
            }
        }

        // header animation
        if (this.header && !this.body.classList.contains('nav-mobile-open')) {
            this.header.style.top = -this.header.clientHeight + 'px';
            this.header.style.transition = 'top .15s linear';

            if (this.body.classList.contains('scroll-down')) {
                this.header.style.top = 0;
            } else {
                this.header.style.top = -this.header.clientHeight + 'px';
            }
        }

        // anchorPanel animation
        const anchorPanel = document.querySelector('.anchors');
        if (anchorPanel) {
            anchorPanel.style.top = -anchorPanel.clientHeight + 'px';
            anchorPanel.style.transition = 'top .15s linear';
            if (this.body.classList.contains('scroll-down') && scrollTop < 400) {
                anchorPanel.style.top = -anchorPanel.clientHeight + 'px';
            } else {
                anchorPanel.style.top = 0;
            }
        }

    }

    checkDevice(e) {
        if (Dom.mobile) {
            const html = document.querySelector('html');
            const orientation = window.orientation & 2;
            if (orientation == 0) {
                if (html.classList.contains('landscape')) {
                    html.classList.remove('landscape')
                }
                html.classList.add('portrait')
            } else if (orientation == 2) {
                if (html.classList.contains('portrait')) {
                    html.classList.remove('portrait')
                }
                html.classList.add('landscape')
            }
        }
    }

    render() {
        // smoothscroll desktop
        if (!Dom.fastscroll) {
            if (this.body.offsetHeight !== this.page.offsetHeight) {
                this.body.setAttribute('style', `height: ${this.page.offsetHeight}px;`);
            }
            if (!Dom.pause) {
                const scrollTop = Dom.scrollTop();
                let newTop = this.page.previousTop || 0;
                newTop += (scrollTop - newTop) / scrollSpeed;
                if (Math.abs(scrollTop - newTop) < 0.15) {
                    newTop = scrollTop;
                }
                if (newTop !== undefined && !Number.isNaN(newTop) && this.page.previousTop !== newTop) {
                    this.page.previousTop = newTop;
                    this.page.setAttribute('style', `transform: translateY(${-newTop}px);`);
                    Dom.scrolling = true;
                } else {
                    Dom.scrolling = false;
                }
                this.onScrollDidChange();
            }

        } else if (this.body.hasAttribute('style')) {
            this.body.removeAttribute('style');
            this.page.removeAttribute('style');
        }

        this.onRequestAnimDidChange();
    }

    onScrollDidChange() {
        // appears
        this.appears.forEach((node, i) => {
            if (!node.to) {
                let rect = Rect.fromNode(node);
                const intersection = rect.intersection(this.windowRect);
                if (intersection.y > 0.0) {
                    node.to = setTimeout(() => {
                        node.classList.add('appeared');
                    }, 150 * node.appearingIndex);
                } else {
                    // if (node.classList.contains('appeared')) {
                    //     node.to = null;
                    //     node.classList.remove('appeared');
                    // }
                }
            }
        });
        Anchors.onScroll();
        ScrollAnchors.onScroll();
        LazyLoad.render(this.windowRect);
    }

    onRequestAnimDidChange() {
        if (this.follower.enabled) {
            this.follower.render();
        }
    }

    loop() {
        if (!disableRender) {
            this.render();
            if (this.playing) {
                window.requestAnimationFrame(() => {
                    this.loop();
                });
            }
        }

    }

    play() {
        this.playing = true;
        this.loop();
    }

    pause() {
        this.playing = false;
    }

    polyfill() {
        if ('NodeList' in window && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }

        if (typeof window.CustomEvent === "function") return false; //If not IE

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    }

}

var app = new App();

window.onload = () => {
    app.init();
    app.play();
};