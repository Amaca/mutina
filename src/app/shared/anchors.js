/* jshint esversion: 6 */

import Dom from './dom';

const body = document.querySelector('body');
const header = document.querySelector('header');

export default class Anchors {

    constructor(node, wrapper, index) {
        const list = document.querySelector('ul.anchor-nav');
        const navItem = document.createElement('li');
        const anchor = document.createElement('a');

        this.id = index;
        this.node = node;
        this.wrapper = wrapper;
        this.name = this.getName();
        this.offset = this.getOffset();
        this.gutter = this.getGutter();
        
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
        const scroll = (e) => {
            const scrollTop = Dom.scrollTop();
            if ((scrollTop >= (this.offset + this.gutter)) && scrollTop < Anchors.items[this.id + 1].offset) {
                this.anchor.classList.add('active');
            } else {
                this.anchor.classList.remove('active');
            }
        };
        this.anchor.addEventListener('click', click);
        window.addEventListener('scroll', scroll);
    }

    destroy() {
        // this.anchor.removeEventListener('click', click);
        // window.removeEventListener('scroll', scroll);
        document.querySelector('ul.anchor-nav').remove();
    }

    getName() {
        return this.node.getAttribute('data-anchor');
    }

    getOffset() {
        return this.node.getBoundingClientRect().top;
    }

    getGutter() {
        return Number(this.node.getAttribute('data-gutter'));
    }

    static init(wrapper) {
        if (wrapper) {
            let list = document.createElement('ul');
            list.className = 'anchor-nav';
            wrapper.appendChild(list);
            Anchors.items = [...document.querySelectorAll('[data-anchor]')].map((element, index) => new Anchors(element, wrapper, index));
            console.log(Anchors.items);
        } 
    }

}
