function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require("chai").expect;

describe('Tests for isOddOrEven()', function () {
    it('should return odd on "а"', function() {
        expect(isOddOrEven("а")).to.equal('odd');
    });

    it('should return even on "ab"', function() {
        expect(isOddOrEven("ab")).to.equal('even');
    });

    it('should return even on ""', function() {
        expect(isOddOrEven("")).to.equal('even');
    });

    it('should return undefined on 10', function() {
        expect(isOddOrEven(10)).to.equal(undefined);
    });
});