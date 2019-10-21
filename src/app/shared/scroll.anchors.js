/* jshint esversion: 6 */

const body = document.querySelector('body');
const header = document.querySelector('header');

export default class ScrollAnchors {

    constructor(node, id, wrapper) {
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
        this.wrapper = wrapper;
        this.page = document.querySelector('.page');
        this.offset = this.node.getAttribute('data-scroll-anchors');
        this.goToAnchor = this.goToAnchor.bind(this);
        this.onWrapperScroll = this.onWrapperScroll.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.addListeners();
    }

    addListeners() {
        this.titles.forEach(title => {
            title.addEventListener('click', this.goToAnchor);
        });
        if (this.wrapper !== window) {
            this.wrapper.addEventListener('scroll', this.onWrapperScroll);
        } else {
            this.onScroll();
        }
    }

    removeListeners() {
        this.destroyed = true;
        this.titles.forEach(title => {
            title.removeEventListener('click', this.goToAnchor);
        });
        if (this.wrapper !== window) {
            this.wrapper.removeEventListener('scroll', this.onWrapperScroll);
        }
    }

    goToAnchor(e) {
        this.areas.forEach(area => {
            if (area.getAttribute('data-scroll-area') === e.target.getAttribute('data-scroll-title')) {
                if (this.wrapper !== window) {
                    TweenMax.to(this.wrapper, 0.8, {
                        scrollTo: {
                            y: this.getOffset(area) + 10,
                            ease: Expo.easeInOut
                        }
                    });
                } else {
                    window.scrollTo(0, this.getOffset(area) + 10);
                }
            }
        });
    }

    onWrapperScroll(e) {
        const area = this.areas.find((area, i) => {
            const top = area.getBoundingClientRect().top;
            const bottom = i < this.areas.length - 1 ? this.areas[i + 1].getBoundingClientRect().top : Number.POSITIVE_INFINITY;
            if (top < this.offset && bottom > this.offset) {
                return area;
            }
        });
        if (this.area_ !== area) {
            this.area_ = area;
            const areaIndex = this.areas.indexOf(area);
            this.titles.forEach((title, i) => {
                if (i === areaIndex) {
                    title.classList.add('active');
                } else {
                    title.classList.remove('active');
                }
            });
        }
    }

    onScroll(e) {
        if (!this.destroyed) {
            this.onWrapperScroll(e);
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

    static init() {
        ScrollAnchors.items = [...document.querySelectorAll('[data-scroll-anchors]')].map((node, id) => new ScrollAnchors(node, id, window));
        debug__('ScrollAnchors: ', ScrollAnchors.items);
    }

    static onScroll(e) {
        ScrollAnchors.items.forEach(node => {
            node.onScroll(e);
        });
    }

}

ScrollAnchors.items = [];