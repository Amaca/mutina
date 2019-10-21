/* jshint esversion: 6 */

import Utils from './utils';

const body = document.querySelector('body');
let clickToggle;

export default class ToggleSearch {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.wrapper = this.node.querySelector('.toggle-search__wrapper');
        this.input = this.node.querySelector('.toggle-search__input input');
        this.open = this.node.querySelector('.toggle-search__open');
        this.close = this.node.querySelector('.toggle-search__close');
        this.addListener();
    }

    addListener() {
        const clickToggle = (e) => {
            this.toggle();
            e.preventDefault();
        };
        this.clickToggle = clickToggle;
        this.open.addEventListener('click', this.clickToggle);
        this.close.addEventListener('click', this.clickToggle);
    }

    toggle() {
        Utils.toggleClass(this.wrapper, 'active');
        let searchOpen = this.wrapper.classList.contains('active') ? true : false;
        if (searchOpen) {
            this.input.focus();
        } else {
            setTimeout(e => {
                this.input.value = '';
            }, 600);
        }
    }

    destroy() {
        this.wrapper.classList.remove('active');
        this.open.removeEventListener('click', this.clickToggle);
        this.close.removeEventListener('click', this.clickToggle);
    }

    static destroyAll() {
        ToggleSearch.items.forEach(node => {
            node.destroy();
        });
    }

    static init() {
        ToggleSearch.items = [...document.querySelectorAll('[data-toggle-search]')].map((node, id) => new ToggleSearch(node, id));
        debug__('ToggleSearch: ', ToggleSearch.items);
    }
}