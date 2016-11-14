let BaseElement = require('./BaseElement');

class Footer extends BaseElement {
    constructor(message) {
        super();

        this.message = message;
    }

    getElementString() {
        return $('<footer>')
            .html('Copyright &copy; ' + this.message);
    }
}

module.exports = Footer;