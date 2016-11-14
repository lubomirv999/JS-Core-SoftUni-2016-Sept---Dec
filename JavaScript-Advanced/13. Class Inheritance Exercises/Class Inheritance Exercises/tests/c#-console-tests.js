let Console = require('../05. C# Console').Console;
let expect = require('chai').expect;

describe('Tests for C# Console', function () {
    it('should have method writeLine', function() {
        expect(typeof Console.writeLine).to.equal('function');
    });

    describe('Tests with one argument passed', function () {
        it('should return the input string', function() {
            let result = Console.writeLine('test');
            expect(result).to.equal('test');
        });

        it('should return undefined on non-string argument', function() {
            let result = Console.writeLine(123);
            expect(result).to.equal(undefined);
        });

        it('should throw error оn empty input', function() {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });

        it('should return the input object as JSON', function() {
            let obj = {'name': 'Stamat'};
            let result = Console.writeLine(obj);
            expect(result).to.equal(JSON.stringify(obj));
        });
    });

    describe('Tests with multiply arguments', function () {
        it('should throw TypeError on non-string first argument', function() {
            expect(() => Console.writeLine(123, 'test')).to.throw(TypeError);
        });

        it('should throw RangeError on less than expected placeholder parameters', function() {
            expect(() => Console.writeLine('Test {0}, {1} {2}', 'first', 'second')).to.throw(RangeError);
        });

        it('should throw RangeError on more than expected placeholder parameters', function() {
            expect(() => Console.writeLine('Test {0}, {1} {2}', 'first', 'second', 'third', 'fourth')).to.throw(RangeError);
        });

        it('should throw RangeError on negative placeholder index', function() {
            expect(() => Console.writeLine('Test {-5}, {1} {2}', 'first', 'second', 'third')).to.throw(RangeError);
        });

        it('should throw RangeError on out-of-range placeholder index', function() {
            expect(() => Console.writeLine('Test {0}, {1} {20}', 'first', 'second', 'third')).to.throw(RangeError);
        });

        it('should throw RangeError on out-of-range placeholder index', function() {
            expect(() => Console.writeLine('Test {20}', 'first')).to.throw(RangeError);
        });

        it('should replace correctly all placeholders', function() {
            expect(Console.writeLine('Test {0}, {1} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test first, second third - chetvyrti');
        });

        it('should replace correctly all placeholders on mixed placeholder numbers', function() {
            expect(Console.writeLine('Test {1}, {0} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test second, first third - chetvyrti');
        });

        it('should replace correctly one placeholder', function() {
            expect(Console.writeLine('{0}', 'first')).to.equal('first');
        });
    });
});