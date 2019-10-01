/* jshint esversion: 6 */

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];

export default class CustomSelect {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.instance = new Choices(node, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false
        });   
    }

    destroy() {
        this.instance.destroy();
    }

    static destroyAll() {
        CustomSelect.items.forEach(node => {
            node.destroy();
        });
    }

    static init(debug) {
        CustomSelect.items = [...document.querySelectorAll('[data-select]')].map((node, id) => new CustomSelect(node, id));
        if (debug) {
            console.log('CustomSelect: ', CustomSelect.items);
        }
    }
}