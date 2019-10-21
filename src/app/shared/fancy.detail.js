/* jshint esversion: 6 */

import Utils from './utils';

const body = document.querySelector('body');
const html = document.getElementsByTagName('html')[0];
let desktopVersion;

export default class FancyDetail {

    static init() {
        if (window.innerWidth > 768) {
            this.initDesktopSidebar();
            desktopVersion = true;
        } else {
            this.initMobileSidebar();
            desktopVersion = false;
        }
    }

    static initDesktopSidebar() {
        const sidebar = document.querySelector('.fancy-detail__sidebar');
        if (document.querySelector('.fancy-detail')) {
            const sidebarClone = sidebar.cloneNode(true);
            body.classList.add('fancy-page');
            body.appendChild(sidebarClone);
            sidebar.remove();
            if (!document.querySelector('.fancy-detail__sidebar--variant')) {
                const sidebarButton = document.querySelector('.fancy-detail__panel-header');
                sidebarButton.addEventListener('click', this.clickToggle);
            }
        }
    }

    static initMobileSidebar() {
        const panel = document.querySelector('.fancy-detail__panel');
        if (document.querySelector('.fancy-detail')) {
            const panelClone = panel.cloneNode(true);
            body.classList.add('fancy-page');
            body.appendChild(panelClone);
            panel.remove();
            if (!document.querySelector('.fancy-detail__sidebar--variant')) {
                const sidebarButton = document.querySelector('.fancy-detail__panel-header');
                sidebarButton.addEventListener('click', this.clickToggle);
            }
        }
    }

    static clickToggle(e) {
        Utils.toggleClass(body, 'fancy-detail-panel-open');
        e.preventDefault();
    }

    static destroyAll() {
        if (window.innerWidth > 768) {
            if (document.querySelector('.fancy-detail__sidebar')) {
                const sidebar = document.querySelector('.fancy-detail__sidebar');
                const sidebarButton = document.querySelector('.fancy-detail__panel-header');
                sidebarButton.removeEventListener('click', this.clickToggle);
                body.classList.remove('fancy-page');
                body.classList.remove('fancy-detail-panel-open');
                sidebar.remove();
            }
        } else {
            if (document.querySelector('.fancy-detail__sidebar')) {
                const panel = document.querySelector('.fancy-detail__panel');
                const sidebarButton = document.querySelector('.fancy-detail__panel-header');
                sidebarButton.removeEventListener('click', this.clickToggle);
                body.classList.remove('fancy-page');
                body.classList.remove('fancy-detail-panel-open');
                panel.remove();
            }
        }
    }

    static orientationChange() {
        //const sidebar = document.querySelector('.fancy-detail__sidebar');
        //if (desktopVersion) {
        //    if (document.querySelector('.fancy-detail')) {
        //        const sidebarClone = sidebar.cloneNode(true);
        //        document.querySelector('.fancy-detail').appendChild(sidebarClone);
        //        sidebar.remove();
        //        desktopVersion = false;

        //    } 
        //} else {
        //    if (document.querySelector('.fancy-detail')) {
        //        const sidebarClone = sidebar.cloneNode(true);
        //        body.appendChild(sidebarClone);
        //        sidebar.remove();
        //        desktopVersione = true;
        //    }
        //}
    }

}