/* jshint esversion: 6 */

import Dom from './dom';

export class AnchorItem {

    constructor(index, parent, target) {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        this.id = index;
        this.target = target;
        this.name = this.target.getAttribute('data-anchor');
        this.offset = this.getOffset();
        // debug__(this.offset);
        listItem.className = 'anchor-' + this.name.replace(/[^\w\s]/g, '').toLowerCase();
        parent.appendChild(listItem);
        anchor.textContent = this.name;
        anchor.className = 'scroll-to-' + this.id;
        anchor.setAttribute('href', '#');
        listItem.appendChild(anchor);
        this.anchor = anchor;
        this.onClick = this.onClick.bind(this);
        this.addListeners();
    }

    getOffset() {
        return this.target.getBoundingClientRect().top + Dom.scrollPosition();
    }

    onClick(e) {
        window.scrollTo(0, this.getOffset() - Anchors.getGutter() + 1);
        e.preventDefault();
    }

    addListeners() {
        this.anchor.addEventListener('click', this.onClick);
    }

    removeListeners() {
        this.anchor.removeEventListener('click', this.onClick);
    }

    destroy() {
        this.removeListeners();
    }

}

export default class Anchors {

    constructor(node) {
        this.node = node;
        const ul = document.createElement('ul');
        ul.className = 'anchor-nav';
        node.appendChild(ul);
        this.ul = ul;
        this.items = [...document.querySelectorAll('[data-anchor]')].map((element, index) => new AnchorItem(index, ul, element));
        debug__('Anchors', this.items);
        if (this.items.length > 0) {
            node.parentElement.style.display = 'flex';
            this.onScroll();
        } else {
            node.parentElement.style.display = 'none';
        }
    }

    onScroll() {
        const anchors = this.items;
        if (anchors.length) {
            const selectedAnchor = anchors.find((x, i) => {
                const top = x.target.getBoundingClientRect().top;
                const bottom = i < anchors.length - 1 ? anchors[i + 1].target.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
                if ((top < Anchors.getGutter() || i === 0) && bottom > Anchors.getGutter()) {
                    x.anchor.classList.add('active');
                    return x;
                }
            });
            if (this.currentAnchor_ !== selectedAnchor) {
                this.currentAnchor_ = selectedAnchor;
                anchors.forEach((x) => {
                    if (x === selectedAnchor) {
                        x.anchor.classList.add('active');
                    } else {
                        x.anchor.classList.remove('active');
                    }
                });
            }
        }
    }

    destroy() {
        this.items.forEach(x => x.destroy());
        this.items = [];
        if (this.ul) {
            this.ul.remove();
        }
    }

    static getGutter() {
        return window.innerWidth > 768 ? 200 : 100;
    }

    static init() {
        Anchors.destroyAll();
        Anchors.items = [...document.querySelectorAll('.anchors__wrapper')].map(x => new Anchors(x));
    }

    static onScroll() {
        Anchors.items.forEach(x => x.onScroll());
    }

    static destroyAll() {
        Anchors.items.forEach(x => x.destroy());
        Anchors.items = [];
    }
}

Anchors.items = [];