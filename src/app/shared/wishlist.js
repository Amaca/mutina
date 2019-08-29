/* jshint esversion: 6 */

export default class Wishlist {

    static Config() {
        Wishlist.items = [];
        Wishlist.lblAdd = 'add to samples';
        Wishlist.lblRemove = 'remove to samples';
        Wishlist.attribute = 'data-wishid';
        Wishlist.attributeSelector = '[data-wishid]';
        Wishlist.attributeCountSelector = '[data-wishcount]';
        Wishlist.attributeListSelector = 'input[data-wishlist]';
        Wishlist.localstorageKey = 'wishlist';
        Wishlist.containerSelector = '.side-panel__list';
    }

    static loadHtml() {
        $.ajax({
            type: "POST",
            url: '/WS/wsWishlist.asmx/Html',
            data: JSON.stringify({ listId: Wishlist.items }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                document.querySelector(Wishlist.containerSelector).innerHTML = data.d.HTML;
                Wishlist.buttons();
            },
            error: function (data) {
                console.log(data);
            }
        });
    }

    static addOrRemove(e) {
        var wishid = e.target.attributes[Wishlist.attribute].value;
        if (Wishlist.items && Wishlist.items.includes(wishid)) {
            e.target.innerHTML = Wishlist.lblAdd;
            Wishlist.items = Wishlist.items.filter(function (v) { return v != wishid });
        }
        else {
            e.target.innerHTML = Wishlist.lblRemove;
            Wishlist.items.push(wishid);
        }
        localStorage.setItem(Wishlist.localstorageKey, JSON.stringify(Wishlist.items));
        Wishlist.loadHtml();
    }

    static buttons() {
        document.querySelectorAll(Wishlist.attributeSelector)
            .forEach(e => {
                e.innerHTML = (Wishlist.items.some(x => x == e.attributes[Wishlist.attribute].value))
                    ? Wishlist.lblRemove
                    : Wishlist.lblAdd;
                e.addEventListener('click', this.addOrRemove);
            });
        document.querySelectorAll(Wishlist.attributeCountSelector)
            .forEach(x => x.innerHTML = Wishlist.items.length);
        document.querySelectorAll(Wishlist.attributeListSelector)
            .forEach(x => x.value = Wishlist.items.join(','));
    }

    static destroyAll() {
        document.querySelectorAll(Wishlist.attributeSelector)
            .forEach(x => x.removeEventListener('click', this.addOrRemove));
    }

    static init() {
        Wishlist.Config();
        if (localStorage.getItem(Wishlist.localstorageKey))
            Wishlist.items = JSON.parse(localStorage.getItem(Wishlist.localstorageKey));
        Wishlist.loadHtml();
    }

}