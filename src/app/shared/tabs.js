/* jshint esversion: 6 */

export default class Tabs {

    constructor(node, index) {
        this.node = node;
        this.index = index;
        this.controls = [...this.node.querySelectorAll('[data-tabs-control]')];
        this.contents = [...this.node.querySelectorAll('[data-tabs-wrapper]')];
        this.wrapper = this.node.querySelector('.tabs__content');
        this.clickTab = this.clickTab.bind(this);
        this.reset();
        this.addListeners();
    }

    reset() {
        this.wrapper.style.height = this.contents[0].clientHeight + 'px';
        this.controls[0].classList.add('active');
        this.contents[0].classList.add('active');
    }

    addListeners() {
        this.controls.forEach(control => {
            control.addEventListener('click', this.clickTab);
        });
    }

    clickTab(e) {
        if (!e.target.classList.contains('active')) {
            const tabId = e.target.getAttribute('data-tabs-control');
            const result = this.contents.filter(x => {
                return x.getAttribute('data-tabs-wrapper') === tabId;
            });
            this.wrapper.style.height = result[0].clientHeight + 'px';
            this.controls.forEach(x => x.classList.remove('active'));
            this.contents.forEach(x => x.classList.remove('active'));
            setTimeout(x => {
                e.target.classList.add('active');
                result[0].classList.add('active');
            }, 300);
        }
    }

    destroy() {
        this.controls.forEach(control => {
            control.removeEventListener('click', this.clickTab);
            control.classList.remove('active');
        });
        this.contents.forEach(x => x.classList.remove('active'));
    }

    static resetAll() {
        setTimeout(() => {
            Tabs.items.forEach(elem => {
                elem.reset();
                // debug__('reset');
            });
        }, 500);
    }

    static destroyAll() {
        Tabs.items.forEach(elem => {
            elem.destroy();
        });
    }

    static init() {
        Tabs.items = [...document.querySelectorAll('[data-tabs]')].map((node, index) => new Tabs(node, index));
        debug__('Tabs: ', Tabs.items);
    }
}