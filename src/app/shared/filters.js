/* jshint esversion: 6 */

import Utils from './utils';

const body = document.querySelector('body');
const parents = document.querySelectorAll('.filters__panel-parent');
let subFiltersOpen = false;

export default class Filters {

    static init() {
        if (window.innerWidth > 768) {
            Filters.desktopFilters();
        } else {
            Filters.desktopFilters();
        }
    }

    static desktopFilters() {
        const closeFiltersSlow = getComputedStyle(document.documentElement).getPropertyValue('--close-filters-speed');
        const closeFiltersFast = 400;

        parents.forEach(parent => {
            parent.addEventListener('click', (e) => {
                e.preventDefault();
                const activeFilters = Utils.getClosest(event.target, 'ul li'); //seleziono ul li attiva appena cliccata
                const subFiltersItemHeight = activeFilters.querySelector('.subfilters__item').clientHeight;
                const height = activeFilters.querySelector('.subfilters__wrapper').clientHeight + 'px';
                const thisParent = parent.parentNode;
                const archive = document.querySelector('.archive');
                if (!subFiltersOpen) { //se i sottomenu sono chiusi
                    document.documentElement.style.setProperty('--close-filters-speed', closeFiltersSlow);
                    body.classList.add('filters-open');
                    thisParent.classList.add('active');
                    archive.style.paddingTop = height;
                    activeFilters.querySelector('.subfilters').style.height = height;
                    activeFilters.querySelector('.subfilters__wrapper').style.top = (subFiltersItemHeight / 4) + 'px';
                    subFiltersOpen = true;
                } else {
                    if (thisParent.classList.contains('active')) { //se un sottomenu è da aprire, verifico prima se ho gia aperto un sottomenu
                        document.documentElement.style.setProperty('--close-filters-speed', closeFiltersSlow);
                        body.classList.remove('filters-open');
                        archive.style.paddingTop = 0;
                        document.querySelectorAll('.subfilters').forEach(x => x.style.height = '0');
                        document.querySelectorAll('.filters__panel ul li.active').forEach(x => x.classList.remove('active'));
                        subFiltersOpen = false;
                    } 
                    else { //un sottomenu è stato già aperto
                        document.documentElement.style.setProperty('--close-filters-speed', closeFiltersFast + 'ms');
                        document.querySelectorAll('.subfilters').forEach(x => x.style.height = '0');
                        document.querySelectorAll('.filters__panel ul li.active').forEach(x => x.classList.remove('active'));
                        setTimeout(x => { //timeout per definite l'animazione di chiusura del sottomenu gia aperto per mostrare il successivo
                            body.classList.add('filters-open');
                            thisParent.classList.add('active');
                            archive.style.paddingTop = height;
                            activeFilters.querySelector('.subfilters').style.height = height;
                            activeFilters.querySelector('.subfilters__wrapper').style.top = (subFiltersItemHeight / 4) + 'px';

                        }, closeFiltersFast);
                        subFiltersOpen = true;
                    }
                }

            });
        });
    }

    static closeFilters(delay) { //chiudo il sottomenu
        if (body.classList.contains('filters-open')) {
            if (delay) {
                document.documentElement.style.setProperty('--close-filters-speed', delay + 'ms');
            }
            body.classList.remove('filters-open');
            document.querySelectorAll('.filters__panel ul li').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.subfilters').forEach(x => x.style.height = '0');
            subFiltersOpen = false;
        }
    }
}