function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe('Tests for lookupChar(str, index) function', function () {
    it('should return undefined on lookupChar(3, 3)', function() {
        expect(lookupChar(3, 3)).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", "2")', function() {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", 1.23)', function() {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });

    it('should return Incorrect index on lookupChar("test", 25)', function() {
        expect(lookupChar("test", 25)).to.equal('Incorrect index');
    });

    it('should return Incorrect index on lookupChar("hello", -4)', function() {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    });

    it('should return Incorrect index on lookupChar("hello", 5)', function() {
        expect(lookupChar("hello", 5)).to.equal('Incorrect index');
    });

    it('should return "o" on lookupChar("hello", 4)', function() {
        expect(lookupChar("hello", 0)).to.equal('h');
    });

    it('should return "l" on lookupChar("hello", 3)', function() {
        expect(lookupChar("hello", 3)).to.equal('l');
    });
});