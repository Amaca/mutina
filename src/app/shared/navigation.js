/* jshint esversion: 6 */

import Utils from './utils';

const body = document.querySelector('body');
const header = document.querySelector('header');
const parents = document.querySelectorAll('.nav__parent');
let subnavOpen = false;
let searchOpen = false;

export default class Navigation {

    static init() {
        if (window.innerWidth > 768) {
            Navigation.desktopNav();
            Navigation.initSearch();
        } else {
            Navigation.mobileNav();
        }
    }

    static desktopNav() {
        const closeNavSlow = getComputedStyle(document.documentElement).getPropertyValue('--close-nav-speed');
        const closeNavFast = 400;

        if (parents) {
            parents.forEach(parent => {
                parent.addEventListener('click', (e) => {
                    e.preventDefault();
                    const activeNav = Utils.getClosest(event.target, 'ul li'); //seleziono ul li attiva appena cliccata
                    const subnavItemHeight = activeNav.querySelector('.subnav__item').clientHeight;
                    const height = subnavItemHeight + (subnavItemHeight / 2) + 'px';
                    const thisParent = parent.parentNode;
                    if (!subnavOpen) { //se i sottomenu sono chiusi
                        if (searchOpen) { //se la ricerca è aperta
                            document.documentElement.style.setProperty('--close-nav-speed', closeNavFast + 'ms');
                            Navigation.toggleSearch();
                            setTimeout(x => { //timeout per definite l'animazione di chiusura della ricerca per mostrare il sottomenu
                                body.classList.add('subnav-open');
                                thisParent.classList.add('active');
                                activeNav.querySelector('.subnav').style.height = height;
                                activeNav.querySelector('.subnav__wrapper').style.top = (subnavItemHeight / 4) + 'px';
                                Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude
                                subnavOpen = true;
                            }, closeNavFast);
                        } else {
                            document.documentElement.style.setProperty('--close-nav-speed', closeNavSlow);
                            body.classList.add('subnav-open');
                            thisParent.classList.add('active');
                            activeNav.querySelector('.subnav').style.height = height;
                            activeNav.querySelector('.subnav__wrapper').style.top = (subnavItemHeight / 4) + 'px';
                            Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude
                            subnavOpen = true;
                        }
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

                });
            });
        }
    }

    static closeNav(delay) { //chiudo il sottomenu
        if (body.classList.contains('subnav-open')) {
            if (delay) {
                document.documentElement.style.setProperty('--close-nav-speed', delay + 'ms');
            }
            body.classList.remove('subnav-open');
            document.querySelectorAll('.nav ul li').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.subnav').forEach(x => x.style.height = '0');
            subnavOpen = false;
        }
        // if (body.classList.contains('nav-mobile-open')) {
        //     body.classList.remove('nav-mobile-open');
        //     subnavOpen = false;
        // }
    }

    static closeOnOutsideClick() { //chiudo il sottomenu se clicco fuori
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                Navigation.closeNav();
            }
        });
    }

    static initSearch() {
        const searchButton = document.querySelector('.nav__search'),
            closeSearch = document.querySelector('.header__search-close'),
            animOnSubNavOpen = 400;

        if (searchButton) {
            searchButton.addEventListener('click', (e) => {
                if (subnavOpen) {
                    Navigation.closeNav(animOnSubNavOpen);
                    setTimeout(e => {
                        Navigation.toggleSearch();
                    }, animOnSubNavOpen);
                } else {
                    Navigation.toggleSearch();
                }
                e.preventDefault();
            });
        }

        if (closeSearch) {
            closeSearch.addEventListener('click', (e) => {
                Navigation.toggleSearch();
                e.preventDefault();
            });
        }
    }

    static toggleSearch() {
        const inputText = document.querySelector('.header__search input');
        if (inputText) {
            Utils.toggleClass(body, 'search-bar-open');
            searchOpen = body.classList.contains('search-bar-open') ? true : false;
            if (searchOpen) {
                inputText.focus();
            } else {
                setTimeout(e => {
                    inputText.value = '';
                }, 400);
            }
        }
    }

    static closeSearch() {
        const inputText = document.querySelector('.header__search input');
        if (inputText) {
            body.classList.remove('search-bar-open');
            searchOpen = false;
            setTimeout(e => {
                inputText.value = '';
            }, 400);
        }
    }

    static mobileNav() {
        const toggle = document.querySelector('.nav__toggle');
        const backs = document.querySelectorAll('.subnav__mobile-back');
        let actualSubNav;

        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (body.classList.contains('nav-mobile-open')) {
                    let subNavActive = false;
                    parents.forEach(x => {
                        if (x.parentNode.classList.contains('active')) {
                            x.parentNode.classList.remove('active');
                            subNavActive = true;
                        }
                    });
                    if (!subNavActive) {
                        body.classList.remove('nav-mobile-open');
                    } else {
                        setTimeout(() => {
                            body.classList.remove('nav-mobile-open');
                        }, 420);
                    }
                } else {
                    body.classList.add('nav-mobile-open');
                }
            });

            parents.forEach(parent => {
                parent.addEventListener('click', (e) => {
                    actualSubNav = parent.parentNode;
                    actualSubNav.classList.add('active');
                    actualSubNav.style.zIndex = 2;
                    e.preventDefault();
                });
            });

            backs.forEach(back => {
                back.addEventListener('click', (e) => {
                    actualSubNav.classList.remove('active');
                    setTimeout(() => {
                        actualSubNav.style.zIndex = 1;
                    }, 500);
                    e.preventDefault();
                });
            });
        }
    }
}