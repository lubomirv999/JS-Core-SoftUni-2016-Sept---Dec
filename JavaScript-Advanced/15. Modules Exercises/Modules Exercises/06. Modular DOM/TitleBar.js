let BaseElement = require('./BaseElement');

class TitleBar extends BaseElement {
    constructor(title) {
        super();

        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.links.push(link);
    }

    getElementString() {
        let nav = $('<nav>').addClass('menu');

        let first = true;
        this.links.forEach(el => {
            if (first) {
                nav.append(el);
                first = false;
            } else {
                nav.append('|');
                nav.append(el);
            }
        });

        return $('<header>')
            .addClass('header')
            .append($('<div>')
                .append($('<span>')
                    .addClass('title')
                    .text(this.title)))
            .append($('<div>')
                .append(nav));
    }
}

module.exports = TitleBar;