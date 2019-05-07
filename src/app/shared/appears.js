/* jshint esversion: 6 */

export default class Appears {

	static init() {
		const appears = [].slice.call(document.querySelectorAll('[data-appear]'));
		if (appears > 0) {
			appears.forEach((node) => {
				let section = node.parentNode;
				let p = node;
				while (p) {
					p = p.parentNode;
					if (p && p.classList && p.classList.contains('section')) {
						section = p;
						p = null;
					}
				}
				node.appearingIndex = [].slice.call(section.querySelectorAll('[data-appear]')).indexOf(node);
			});
		}
		return appears;
	}

}
