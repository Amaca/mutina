import Navigation from "./navigation";

/* jshint esversion: 6 */


const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
const header = document.querySelector('header');
let clickToggle;
let clickOutside;
let clickNext;
let clickClose;

export default class SidePanel {

    constructor(node, id, type) {
        this.node = node;
        this.id = id;
        this.panel = document.querySelector('.side-panel');
        this.close = this.panel.querySelector('.side-panel__close');
        this.next = this.panel.querySelector('.cta--next');
        this.send = this.panel.querySelector('.cta--send');
        this.primaryPanel = this.panel.querySelector('.side-panel__primary');
        this.secondaryPanel = this.panel.querySelector('.side-panel__secondary');
        this.type = type;
        this.isSamples = false;
        this.isDealers = false;

        switch (type) {
            case 'samples':
                this.parentClass = 'side-panel--samples';
                this.isSamples = true;
                break;
            case 'dealers':
                this.parentClass = 'side-panel--dealers';
                this.isDealers = true;
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
    }

    addListener() {
        //clicca fuori dal pannello
        clickOutside = (e) => {
            if (!this.panel.contains(e.target) && body.classList.contains('side-panel-open')) {
                this.closePanel();
            }
        }
        this.clickOutside = clickOutside;
        document.addEventListener('click', this.clickOutside);

        //click close
        clickClose = (e) => {
            this.toggle();
        };
        this.clickClose = clickClose;
        this.close.addEventListener('click', this.clickClose);

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
        this.addListener();

        html.style.overflow = 'hidden';
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
        this.close.removeEventListener('click', this.clickClose);
        this.next.removeEventListener('click', this.clickNext);
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
                if (this.isSamples) {
                    TweenMax.set(this.next, {
                        transform: "translateY(0)",
                        ease: Expo.easeInOut
                    });
                    TweenMax.set(this.send, {
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
        TweenMax.to(this.primaryPanel, 0.8, {
            transform: "translateX(-100%)",
            ease: Expo.easeInOut
        });
        TweenMax.to(this.secondaryPanel, 0.8, {
            transform: 'translateX(-100%)',
            ease: Expo.easeInOut
        });
        if (this.isSamples) {
            TweenMax.to(this.next, 0.8, {
                transform: "translateY(-100%)",
                ease: Expo.easeInOut
            });
            TweenMax.to(this.send, 0.8, {
                transform: "translateY(-100%)",
                ease: Expo.easeInOut
            });
        }
    }

    destroy() {
        this.panel.classList.remove(this.parentClass);
        this.node.removeEventListener('click', this.clickToggle);
        this.close.removeEventListener('click', this.clickClose);
        this.next.removeEventListener('click', this.clickNext);
        document.removeEventListener('click', this.clickOutside);
    }

    static destroyAll() {
        SidePanel.items.forEach(node => {
            node.destroy();
        });
    }

    static init(debug) {
        SidePanel.items = [...document.querySelectorAll('[data-side-panel]')].map((node, id) => new SidePanel(node, id, node.getAttribute('data-side-panel')));
        if (debug) {
            console.log('SidePanel: ', SidePanel.items);
        }
    }
}