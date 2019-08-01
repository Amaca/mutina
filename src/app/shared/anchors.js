/* jshint esversion: 6 */


const body = document.querySelector('body');
const header = document.querySelector('header');
const page = document.querySelector('.page');
let destroyed = false;
let topControl;
export default class Anchors {

    constructor(node, wrapper, gutter, index) {
        const list = document.querySelector('ul.anchor-nav');
        const navItem = document.createElement('li');
        const anchor = document.createElement('a');

        this.id = index;
        this.node = node;
        this.wrapper = wrapper;
        this.gutter = window.innerWidth > 768 ? gutter : gutter / 2;
        this.name = this.getName();
        this.offset = this.getOffset();

        navItem.className = 'anchor-' + this.name.replace(/[^\w\s]/g, '').toLowerCase();
        list.appendChild(navItem);

        anchor.textContent = this.name;
        anchor.className = 'scroll-to-' + this.id;
        anchor.setAttribute('href', '#');
        navItem.appendChild(anchor);

        this.anchor = anchor;

        this.addListeners();
    }

    addListeners() {
        const click = (e) => {
            window.scrollTo(0, this.offset + this.gutter);
            e.preventDefault();
        };
        this.click = click;
        this.anchor.addEventListener('click', this.click);
    }

    destroy() {
        this.anchor.removeEventListener('click', this.click);
    }

    getName() {
        return this.node.getAttribute('data-anchor');
    }

    getOffset() {
        return this.node.getBoundingClientRect().top;
    }

    static init(wrapper, gutter, debug) {
        if (Anchors.items > 0) {
            Anchors.destroyAll();
        }
        if (wrapper) {
            let list = document.createElement('ul');
            Anchors.gutter = gutter;
            list.className = 'anchor-nav';
            wrapper.appendChild(list);
            Anchors.items = [...document.querySelectorAll('[data-anchor]')].map((element, index) => new Anchors(element, wrapper, gutter, index));
            if (debug) {
                console.log('Anchors: ', Anchors.items);
            }
            if (Anchors.items.length > 0) {
                wrapper.parentElement.style.display = 'flex';
                // window.addEventListener('scroll', Anchors.onScroll);
                Anchors.onScroll();
            } else {
                wrapper.parentElement.style.display = 'none';
            }

        }
    }

    static onScroll() {
        if (topControl !== page.style.transform) { //controllo per requestanimationframe su contenitore dello scroll virtuale
            topControl = page.style.transform;
            const anchor = Anchors.items.find((anchor, i, anchors) => {
                const top = anchor.node.getBoundingClientRect().top;
                const bottom = i < anchors.length - 1 ? anchors[i + 1].node.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
                anchors.forEach((elem, i) => {
                    elem.anchor.classList.remove('active');
                });
                if (top < Anchors.gutter && bottom > Anchors.gutter) {
                    anchors[i].anchor.classList.add('active');
                    return anchor;
                }
            });
        }

        if (!destroyed) {
            requestAnimationFrame(Anchors.onScroll);
        }
    }

    static destroyAll() {
        if (Anchors.items) {
            Anchors.items.forEach(anchor => {
                anchor.destroy();
            });
        }
        if (document.querySelector('ul.anchor-nav')) {
            document.querySelector('ul.anchor-nav').remove();
        }
        destroyed = true;
    }
}