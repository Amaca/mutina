/* jshint esversion: 6 */

const body = document.querySelector('body');
const header = document.querySelector('header');
const parents = document.querySelectorAll('.nav__parent');
let subnavOpen = false;

export default class Navigation {

    static init() {
        const closeNavSlow = getComputedStyle(document.documentElement).getPropertyValue('--close-nav-speed');
        const closeNavFast = 400;

        parents.forEach(parent => {
            parent.addEventListener('click', (e) => {
                const activeNav = e.path[3]; //seleziono ul li attiva appena cliccata
                const subnavItemHeight = activeNav.querySelector('.subnav__item').clientHeight;
                const height = subnavItemHeight + (subnavItemHeight / 2) + 'px';
                const thisParent = parent.parentNode;
                if (!subnavOpen) { //se i sottomenu sono chiusi
                    document.documentElement.style.setProperty('--close-nav-speed', closeNavSlow);
                    body.classList.add('subnav-open');
                    thisParent.classList.add('active');
                    activeNav.querySelector('.subnav').style.height = height;
                    activeNav.querySelector('.subnav__wrapper').style.top = (subnavItemHeight / 4) + 'px';
                    Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude
                    subnavOpen = true;
                } else {
                    if (thisParent.classList.contains('active')) { //se un sottomenu è da aprire, verifico prima se ho gia aperto un sottomenu
                        document.documentElement.style.setProperty('--close-nav-speed', closeNavSlow);
                        body.classList.remove('subnav-open');
                        document.querySelectorAll('.subnav').forEach(x => x.style.height = '0');
                        document.querySelectorAll('.nav ul li.active').forEach(x => x.classList.remove('active'));
                        subnavOpen = false;
                    } else { //un sottomenu è stato già aperto
                        document.documentElement.style.setProperty('--close-nav-speed', closeNavFast + 'ms');
                        document.querySelectorAll('.subnav').forEach(x => x.style.height = '0');
                        document.querySelectorAll('.nav ul li.active').forEach(x => x.classList.remove('active'));
                        setTimeout(x => { //timeout per definite l'animazione di chiusura del sottomenu gia aperto per mostrare il successivo
                            body.classList.add('subnav-open');
                            thisParent.classList.add('active');
                            activeNav.querySelector('.subnav').style.height = height;
                            activeNav.querySelector('.subnav__wrapper').style.top = (subnavItemHeight / 4) + 'px';
                            Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude

                        }, closeNavFast);
                        subnavOpen = true;
                    }
                }
                e.preventDefault();
            });
        });
    }

    static closeNav() { //chiudo il sottomenu
        if (body.classList.contains('subnav-open')) {
            body.classList.remove('subnav-open');
            document.querySelectorAll('.nav ul li').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.subnav').forEach(x => x.style.height = '0');
            subnavOpen = false;
        }
    }

    static closeOnOutsideClick() { //chiudo il sottomenu se clicco fuori
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                Navigation.closeNav();
            }
        });
    }

    // static splitButtons() {
    //     const buttons = document.querySelectorAll('.btn--split');
    //     buttons.forEach(button => {
    //         const words = Array.from(button.children).filter(function (item) {
    //             return item.matches('.word');
    //         });
    //         words.forEach(word => {
    //             let text = document.createElement('span');
    //             text.classList.add('full-text');
    //             text.innerHTML = word.getAttribute('data-word');
    //             word.appendChild(text);
    //         });
    //     });
    // }

    // static mainSearch() {
    //     let searchButton = document.querySelector('.nav__search'),
    //         closeSearch = document.querySelector('.main-search__close'),
    //         mobileCloseSearch = document.querySelector('.mobile-search__close'),
    //         mobileButton = document.querySelector('.mobile-search__icon');


    //     searchButton.addEventListener('click', (e) => {
    //         body.classList.add('main-search-open');
    //         closePanelFilter();
    //         e.preventDefault();
    //     })

    //     closeSearch.addEventListener('click', (e) => {
    //         body.classList.remove('main-search-open');
    //         e.preventDefault();
    //     })

    //     mobileButton.addEventListener('click', (e) => {
    //         body.classList.add('main-search-open');
    //         e.preventDefault();
    //     })

    //     mobileCloseSearch.addEventListener('click', (e) => {
    //         body.classList.remove('main-search-open');
    //         e.preventDefault();
    //     })
    // }

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