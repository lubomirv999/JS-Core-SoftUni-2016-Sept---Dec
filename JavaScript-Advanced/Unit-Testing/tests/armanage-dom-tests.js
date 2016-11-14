let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

document.body.innerHTML = `
    <div id="target">
        <div class="nested target">
            <p>This is some text</p>
        </div>
        <div class="target">
            <p>Empty div</p>
        </div>
        <div class="inside">
            <span class="nested">Some more text</span>
            <span class="target">Some more text</span>
        </div>
    </div>
`;


describe('Tests for nuke(selector1, selector2) ', function () {
    let obj;
    beforeEach('init the object', function () {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>`;
    });
    
    it('should do nothing on invalid selectors', function () {
        let selector = $('#target');
        let prev = selector.html();
        nuke(2, "#target");
        expect(selector.html()).to.equal(prev);
    });

    it('should do nothing on nuke(2, "#target")', function () {
        let selector = $('#target');
        let prev = selector.html();
        nuke('.nested', '.inside');
        expect(selector.html()).to.equal(prev);
    });

    it('should do noting if 1 parameters is not a valid selector', function () {
        let selector1 = '#target';
        let selector2 = 'nested';
        let len = $(selector1).length;
        nuke(selector1, selector2);
        expect($(selector1).length).to.be.equal(len);
    });

    it('should do noting if parameters are equals', function () {
        let selector = '#target';
        let before = document.body.innerHTML;
        nuke(selector, selector);
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });

    it('should remove nodes whit correct selectors', function () {
        let selector1 = '.target';
        let selector2 = '.nested';
        nuke(selector1, selector2);
        let after = $(selector1 + selector2);
        expect(after.length).to.be.equal(0);
    });
});
