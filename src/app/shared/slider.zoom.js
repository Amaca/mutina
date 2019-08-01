/* jshint esversion: 6 */

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];

export default class SliderZoom {

    constructor(node, id) {
        this.node = node;
        this.id = id;
    }

    destroy() {

    }

    static destroyAll() {
        SliderZoom.items.forEach(node => {
            node.destroy();
        });
    }

    static init(debug) {
        SliderZoom.items = [...document.querySelectorAll('[data-slider-zoom]')].map((node, id) => new SliderZoom(node, id));
        if (debug) {
            console.log('SliderZoom: ', SliderZoom.items);
        }
    }
}