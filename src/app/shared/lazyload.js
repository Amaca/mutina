/* jshint esversion: 6 */

import Rect from './rect';

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];

// const delay = 1200; //@slidebg on enter
const delay = 800;

export default class LazyLoad {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.src = node.getAttribute('data-load');
        this.height = node.getAttribute('data-height') ? node.getAttribute('data-height') : null;
        this.parent = (node.parentNode).parentNode;
        // if (this.height) {
        //     this.paddingTop = (this.parent.clientWidth * this.height) / this.parent.clientWidth;
        //     this.node.style.paddingTop = this.paddingTop + 'px';
        // }
    }

    load() {
        if (!this.loaded) {
            this.loaded = true;
            const node = this.node;
            node.onload = () => {
                // let time = this.parent.classList.contains('') ? 0 : delay;
                setTimeout(() => {
                    this.parent.classList.add('loaded');
                    node.onload = null;
                }, 400);

                // this.parent.classList.add('loaded');
                // node.onload = null;
            };
            node.src = this.src;
        }
    }

    //INIT
    static init() {
        LazyLoad.items = [...document.querySelectorAll('[data-load]')].map((element, id) => new LazyLoad(element, id));
        console.log('Lazy load: ', LazyLoad.items);
    }

    //render
    static render(windowRect) {
        this.items.forEach((item, i) => {
            if (!item.loaded) {
                const node = item.node;
                let rect = Rect.fromNode(node);
                const intersection = rect.intersection(windowRect);
                if (intersection.y > 0.0) {
                    item.load();
                }
            }
        });
    }

}

LazyLoad.items = [];