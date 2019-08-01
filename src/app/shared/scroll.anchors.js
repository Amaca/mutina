/* jshint esversion: 6 */


const body = document.querySelector('body');
const header = document.querySelector('header');

export default class ScrollAnchors {

    constructor(node, id) {
        this.node = node;
        this.id = id;
        this.titles = [...this.node.querySelectorAll('[data-scroll-title]')];
        this.areas = [...document.querySelectorAll('[data-scroll-area]')].filter(x => {
            const relativeAreas = [];
            this.titles.forEach(y => {
                if (x.getAttribute('data-scroll-area') === y.getAttribute('data-scroll-title')) {
                    relativeAreas.push(x);
                }
            });
            return relativeAreas;
        });
        this.page = document.querySelector('.page');
        this.offset = this.node.getAttribute('data-scroll-anchors');
        this.goToAnchor = this.goToAnchor.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.addListeners();
    }

    addListeners() {
        this.titles.forEach(title => {
            title.addEventListener('click', this.goToAnchor);
        });
        this.onScroll();
    }

    removeListeners() {
        this.destroyed = true;
        this.titles.forEach(title => {
            title.removeEventListener('click', this.goToAnchor);
        });
        window.removeEventListener('scroll', this.onScroll);
    }

    goToAnchor(e) {
        this.areas.forEach(area => {
            if (area.getAttribute('data-scroll-area') === e.target.getAttribute('data-scroll-title')) {
                window.scrollTo(0, this.getOffset(area) + 10);
            }
        });
    }

    onScroll(e) {
        if (this.top !== this.page.style.transform) { //controllo per requestanimationframe su contenitore dello scroll virtuale
            this.top = this.page.style.transform;
            const anchor = this.areas.find((area, i) => {
                const top = area.getBoundingClientRect().top;
                const bottom = i < this.areas.length - 1 ? this.areas[i + 1].getBoundingClientRect().top : Number.POSITIVE_INFINITY;
                this.titles.forEach(title => {
                    title.classList.remove('active');
                });
                if (top < this.offset && bottom > this.offset) {
                    this.titles[i].classList.add('active');
                    return area;
                }
            });
        }
        if (!this.destroyed) {
            requestAnimationFrame(this.onScroll);
        }
    }

    getOffset(area) {
        return area.offsetTop - this.offset;
    }

    destroy() {
        this.removeListeners();
    }

    static destroyAll() {
        ScrollAnchors.items.forEach(node => {
            node.destroy();
        });
    }

    static init(debug) {
        ScrollAnchors.items = [...document.querySelectorAll('[data-scroll-anchors]')].map((node, id) => new ScrollAnchors(node, id));
        if (debug) {
            console.log('ScrollAnchors: ', ScrollAnchors.items);
        }
    }
}