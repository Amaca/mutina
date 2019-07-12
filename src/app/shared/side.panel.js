import Navigation from "./navigation";

/* jshint esversion: 6 */


const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const header = document.querySelector('header');
let clickToggle;
let clickOutside;
let clickNext;

export default class SidePanel {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.panel = document.querySelector('.side-panel');
        this.close = this.panel.querySelector('.side-panel__close');
        this.primaryPanel = this.panel.querySelector('.side-panel__list');
        this.secondaryPanel = this.panel.querySelector('.side-panel__form');
        this.next = this.panel.querySelector('.cta--next');
        this.send = this.panel.querySelector('.cta--send');
        this.addListener();
    }

    addListener() {
        clickToggle = (e) => {
            this.toggle();
        };
        this.clickToggle = clickToggle;
        this.node.addEventListener('click', this.clickToggle);
        this.close.addEventListener('click', this.clickToggle);

        //clicca fuori dal pannello
        clickOutside = (e) => {
            if (!this.panel.contains(e.target) && body.classList.contains('side-panel-open')) {
                this.closePanel();
            }
        }
        this.clickOutside = clickOutside;
        document.addEventListener('click', this.clickOutside);

        //click next
        clickNext = (e) => {
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
        html.style.overflow = 'hidden';
        Navigation.closeNav();
        Navigation.closeSearch();
        setTimeout(x => {
            body.classList.add('side-panel-open');
        }, 400);
        TweenMax.to(this.panel, 0.8, {
            right: 0,
            ease: Expo.easeInOut
        });
    }

    closePanel() {
        html.style.overflow = 'initial';
        setTimeout(x => {
            body.classList.remove('side-panel-open');
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
                TweenMax.set(this.next, {
                    transform: "translateY(0)",
                    ease: Expo.easeInOut
                });
                TweenMax.set(this.send, {
                    transform: "translateY(0)",
                });
                this.primaryPanel.scrollTo(0, 0);
                this.secondaryPanel.scrollTo(0, 0);
            }
        });
    }

    nextPanel() {
        TweenMax.to(this.primaryPanel, 0.8, {
            transform: "translateX(-100%)",
            ease: Expo.easeInOut
        });
        TweenMax.to(this.secondaryPanel, 0.8, {
            transform: 'translateX(-100%)',
            ease: Expo.easeInOut
        });
        TweenMax.to(this.next, 0.8, {
            transform: "translateY(-100%)",
            ease: Expo.easeInOut
        });
        TweenMax.to(this.send, 0.8, {
            transform: "translateY(-100%)",
            ease: Expo.easeInOut
        });
    }

    destroy() {
        this.node.removeEventListener('click', this.clickToggle);
        this.close.removeEventListener('click', this.clickToggle);
        document.removeEventListener('click', this.clickOutside);
    }

    static destroyAll() {
        SidePanel.items.forEach(node => {
            node.destroy();
        });
    }

    static init(debug) {
        SidePanel.items = [...document.querySelectorAll('[data-side-panel]')].map((node, id) => new SidePanel(node, id));
        if (debug) {
            console.log('SidePanel: ', SidePanel.items);
        }
    }
}