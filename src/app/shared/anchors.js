/* jshint esversion: 6 */

import Utils from './utils';
import Dom from './dom';

const body = document.querySelector('body');
const header = document.querySelector('header');
const anchors = document.querySelectorAll('[data-anchor]');

export default class Anchors {

    constructor(node, wrapper, index) {
        this.id = index;
        this.node = node;
        this.wrapper = wrapper;
        this.name = this.getName();
        this.offset = this.getOffset();
        this.gutter = this.getGutter();
        //this.anchor = this.getAnchor();

        this.onResize = (event) => {
            this.onResize_(event);
        };
        node.addEventListener('resize', (e) => {
            this.onResize();
        });

        // node.addEventListener('scroll', (e) => {
        //     this.onScroll();
        // });
    }

    getName() {
        return this.node.getAttribute('data-anchor');
    }

    getOffset() {
        return this.node.offsetTop;
    }

    getGutter() {
        return Number(this.node.getAttribute('data-gutter'));
    }

    // getAnchor() {
    //     return document.querySelector('[data-scroll-to=' + this.id + ']');
    // }

    // onScroll(e) {
    //     const scrollTop = Dom.scrollTop();
    //     if (scrollTop >= this.node.offset) {
    //         this.anchor.classList.add('active');
    //     } 
    // }

    onResize_(e) {
        this.offset = this.getOffset();
    }

    destroy() {
        this.node.removeEventListener('resize', this.onResize);
    }

    static init(wrapper) {
        Anchors.items = [...document.querySelectorAll('[data-anchor]')].map((element, index) => new Anchors(element, wrapper, index));
        Anchors.createNav(Anchors.items, wrapper);
    }

    static createNav(anchors, wrapper) {
        let list = document.createElement('ul');
        list.className = 'anchor-nav';
        anchors.forEach( item => {
            let navItem = document.createElement('li');
            let anchor = document.createElement('a');
            let attr = document.createAttribute('data-scroll-to');  
            
            navItem.className = 'anchor-' + item.name.replace(/[^\w\s]/g, '').toLowerCase();
            list.appendChild(navItem);
            
            anchor.textContent = item.name;
            attr.value = item.id;
            anchor.setAttributeNode(attr);
            anchor.setAttribute('href', '#');
            navItem.appendChild(anchor);

            navItem.addEventListener('click', (e) => {
                window.scrollTo(0, item.offset + item.gutter);
                e.preventDefault();
            });
        }); 
        wrapper.appendChild(list);
    }

}


// class Toggle {

//     constructor(node) {
//         this.node = node;
//         this.onClick = (event) => {
//             this.onClick_(event);
//         };
//         node.addEventListener('click', this.onClick);
//         console.log(this);
//         /*
//         {
//             constructor: function
//             onClick: function
//             close: function
//         } 
//         */
//     }

//     onClick_(event) {
//         console.log('onClick');
//         Toggle.items.forEach(x => x === this ? x.open() : x.close());
//     }

//     close() {

//     }

//     destroy() {
//         this.node.removeEventListener('click', this.onClick);
//     }

//     static init() {
//         if (Toggle.items) {
//             Toggle.items.forEach(x => x.destroy());
//         }
//         Toggle.items = [...document.querySelectorAll('[toggle]')].map(x => new Toggle(x));
//     }

// }

// console.log(Toggle);

// {
//     init: function
//     items: [Toggle, Toggle, Toggle, Toggle]
// } 