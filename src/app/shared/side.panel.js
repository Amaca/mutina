/* jshint esversion: 6 */

import Dom from './dom';
import Navigation from "./navigation";

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const header = document.querySelector('header');
let clickToggle;
let clickOutside;
let clickNext;
let clickLogin;
let clickClose;

export default class SidePanel {

    constructor(node, id, type) {
        this.node = node;
        this.id = id;
        this.panel = document.querySelector('.side-panel');
        this.close = this.panel.querySelector('.side-panel__close');
        this.closeLeave = this.panel.querySelector('.panel-close-leave');
        this.send = this.panel.querySelector('.cta--send');
        this.primaryPanel = this.panel.querySelector('.side-panel__primary');
        this.secondaryPanel = this.panel.querySelector('.side-panel__secondary');
        this.loginPanel = this.panel.querySelector('.side-panel__login');
        this.recoverPanel = this.panel.querySelector('.side-panel__recover');
        this.resetPanel = this.panel.querySelector('.side-panel__reset');
        this.type = type;
        this.isSamples = false;
        this.isDealers = false;

        switch (type) {
            case 'samples':
                this.parentClass = 'side-panel--samples';
                this.next = this.panel.querySelector('.cta--next');
                this.isSamples = true;
                break;
            case 'dealers':
                this.parentClass = 'side-panel--dealers';
                this.next = this.panel.querySelector('.cta--results');
                this.isDealers = true;
                break;
            case 'login':
                this.parentClass = 'side-panel--login';
                this.login = this.panel.querySelector('.cta--login');
                this.next = this.panel.querySelector('.cta--recover');
                this.isLogin = true;
                this.url = this.node.getAttribute('data-url');
                this.isLogged = this.node.getAttribute('data-islogged') == '1';
                break;
        }

        this.init();
    }

    init() {
        clickToggle = (e) => {
            this.toggle();
        };
        this.clickToggle = clickToggle;
        this.node.addEventListener('click', this.clickToggle);
        //###
        // this.parentClass = 'side-panel--dealers';
        // this.isDealers = true;
        // this.toggle();
        //###
    }

    addListener() {
        //clicca fuori dal pannello
        clickOutside = (e) => {
            if (!this.panel.contains(e.target) && body.classList.contains('side-panel-open')) {
                this.closePanel();
            }
        };
        this.clickOutside = clickOutside;
        document.addEventListener('click', this.clickOutside);

        //click close
        clickClose = (e) => {
            this.toggle();
        };
        this.clickClose = clickClose;
        this.close.addEventListener('click', this.clickClose);
        this.closeLeave.addEventListener('click', this.clickClose);

        //click next
        clickNext = (e) => {
            if (this.type == 'dealers' && !$('#form-getintouch').valid()) {
                return;
            }
            this.nextPanel();
        }
        this.clickNext = clickNext;
        this.next.addEventListener('click', this.clickNext);
    }

    toggle() {
        if (!body.classList.contains('side-panel-open')) {
            this.openPanel();
        } else {
            this.closePanel();
        }
    }

    openPanel() {
        if (this.loginPanel && this.isLogged)
            location.href = this.url;

        this.addListener();
        if (Dom.fastscroll) {
            body.style.cssText = 'overflow: hidden;';
        } else {
            html.style.cssText = 'overflow: hidden;';
        }
        Navigation.closeNav();
        Navigation.closeSearch();
        this.panel.classList.add(this.parentClass);

        setTimeout(x => {
            body.classList.add('side-panel-open');
        }, 400);
        TweenMax.to(this.panel, 0.8, {
            right: 0,
            ease: Expo.easeInOut
        });
    }

    closePanel() {
        document.removeEventListener('click', this.clickOutside);
        this.next.removeEventListener('click', this.clickNext);
        this.close.removeEventListener('click', this.clickClose);
        if (this.closeLeave) {
            this.closeLeave.removeEventListener('click', this.clickClose);
        }
        if (Dom.fastscroll) {
            body.style.cssText = 'overflow: initial;';
        } else {
            html.style.cssText = 'overflow: initial;';
        }
        setTimeout(x => {
            body.classList.remove('side-panel-open');
            document.querySelector(".side-panel__recover").style.display = "block";
        }, 400);

        TweenMax.to(this.panel, 0.8, {
            right: -this.panel.clientWidth - 2 + 'px',
            ease: Expo.easeInOut,
            onComplete: () => {
                TweenMax.set(this.primaryPanel, {
                    transform: "translateX(0)"
                });
                TweenMax.set(this.secondaryPanel, {
                    transform: 'translateX(0)'
                });
                if (this.isSamples) {
                    TweenMax.set(this.next, {
                        transform: "translateY(0)",
                        ease: Expo.easeInOut
                    });
                    TweenMax.set(this.send, {
                        transform: "translateY(0)",
                    });
                };
                if (this.isLogin) {
                    TweenMax.set(this.loginPanel, {
                        transform: "translateY(0)",
                        ease: Expo.easeInOut
                    });
                    TweenMax.set(this.recoverPanel, {
                        transform: "translateY(0)",
                    });
                    TweenMax.set(this.resetPanel, {
                        transform: "translateY(0)",
                    });
                }
                this.panel.classList.remove(this.parentClass);
                this.primaryPanel.scrollTo(0, 0);
                this.secondaryPanel.scrollTo(0, 0);
            }
        });
    }

    nextPanel() {
        let transformRate = '';
        if (body.classList.contains('ie11')) {
            transformRate = 'translateX(-100%) translateX(-' + (window.innerWidth / 12) / 2 + 'px)';
        } else {
            transformRate = 'translateX(-100%)';
        }
        TweenMax.to(this.primaryPanel, 0.8, {
            transform: transformRate,
            ease: Expo.easeInOut
        });
        TweenMax.to(this.secondaryPanel, 0.8, {
            transform: transformRate,
            ease: Expo.easeInOut
        });
        if (this.isSamples) {
            TweenMax.to(this.next, 0.8, {
                transform: transformRate,
                ease: Expo.easeInOut
            });
            TweenMax.to(this.send, 0.8, {
                transform: transformRate,
                ease: Expo.easeInOut
            });
        }
        if (this.isLogin) {

            TweenMax.to(this.loginPanel, 0.8, {
                transform: transformRate,
                ease: Expo.easeInOut
            });
            TweenMax.to(this.recoverPanel, 0.8, {
                transform: transformRate,
                ease: Expo.easeInOut
            });
        }
    }

    static reset() {
        document.querySelector(".side-panel__recover").style.display = "none";
        let transformRate = '';
        if (body.classList.contains('ie11')) {
            transformRate = 'translateX(-100%) translateX(-' + (window.innerWidth / 12) / 2 + 'px)';
        } else {
            transformRate = 'translateX(-100%)';
        }
        TweenMax.to(document.querySelector('.side-panel__login'), 0.8, {
            transform: transformRate,
            ease: Expo.easeInOut
        });
        TweenMax.to(document.querySelector('.side-panel__reset'), 0.8, {
            transform: transformRate,
            ease: Expo.easeInOut
        });
    }

    destroy() {
        this.panel.classList.remove(this.parentClass);
        this.node.removeEventListener('click', this.clickToggle);
        this.next.removeEventListener('click', this.clickNext);
        this.close.removeEventListener('click', this.clickClose);
        if (this.closeLeave) {
            this.closeLeave.addEventListener('click', this.clickClose);
        }
        document.removeEventListener('click', this.clickOutside);
    }

    static destroyAll() {
        SidePanel.items.forEach(node => {
            node.destroy();
        });
    }

    static init() {
        SidePanel.items = [...document.querySelectorAll('[data-side-panel]')].map((node, id) => new SidePanel(node, id, node.getAttribute('data-side-panel')));
        debug__('SidePanel: ', SidePanel.items);
    }
}