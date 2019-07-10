/* jshint esversion: 6 */

export default class Grid {

    constructor(node, index) {
        this.node = node;
        this.index = index;
        this.instance = new Muuri(node, {
            layout: {
                fillGaps: true
            }
        });
    }

    destroy() {
        this.instance.destroy(true);
    }

    static destroyAll() {
        Grid.items.forEach(grid => {
            grid.destroy();
        });
    }

    static init(debug) {
        Grid.items = [...document.querySelectorAll('.listing--grid')].map((node, index) => new Grid(node, index));
        if (debug) {
            console.log('Grid: ', Grid.items);
        }
    }

}