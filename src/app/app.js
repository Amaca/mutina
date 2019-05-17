/* jshint esversion: 6 */
/* global window, document, Swiper, TweenMax, TimelineMax */

import "@babel/polyfill";
import barba from '@barba/core';
import "css-vars-ponyfill";
import Appears from './shared/appears';
import Dom from './shared/dom';
import Navigation from "./shared/navigation";
import Rect from './shared/rect';
import Sliders from "./shared/sliders";
import Utils from './shared/utils';

let menuStyle = 1;
let scrollSpeed = 8;

export default class App {

    constructor() {}

    init() {
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        const parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));
        Dom.detect(body);
        const mouse = {
            x: 0,
            y: 0
        };
        this.body = body;
        this.page = page;
        this.appears = [];
        this.parallaxes = parallaxes;
        this.onResize();
        this.addListeners();
        this.transitions();
        this.onPageInit();
        body.classList.add('ready');
    }

    transitions() {
        // Basic default transition, with no rules and minimal hooks…
        barba.init({
            debug: true,
            transitions: [{
                leave({
                    current,
                    next,
                    trigger
                }) {
                    // Do something with `current.container` for your leave transition
                    // then return a promise or use `this.async()`
                    console.log('leaving');
                    return Promise.resolve();
                    // this.async();
                },
                enter({
                    current,
                    next,
                    trigger
                }) {
                    // Do something with `next.container` for your enter transition
                    // then return a promise or use `this.async()`
                    console.log('entering');
                    app.onPageInit();
                    return Promise.resolve();
                    // this.async();
                },
            }, ],
        });
    }

    onPageInit() {
        this.appears = Appears.init();
        Splitting();
        Sliders.init();
        Navigation.init();
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
    }

    onScroll(e) {
        Navigation.closeNav();
        const scrollTop = Dom.scrollTop();
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
        if (scrollTop > 80) {
            this.body.classList.add('fixed');
        } else if (menuStyle === 1) {
            this.body.classList.remove('fixed');
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