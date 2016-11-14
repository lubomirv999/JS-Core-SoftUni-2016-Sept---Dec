let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe('Tests for mathEnforcer object', function () {
    describe('Tests for addFive(num)', function() {
        it('should return undefined on addFive("3")', () => {
            expect(mathEnforcer.addFive("3")).to.equal(undefined);
        });

        it('should return 25 on addFive(20)', function() {
            expect(mathEnforcer.addFive(20)).to.equal(25);
        });

        it('should return 0 on addFive(-5)', function() {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('should return 10.5 on addFive(5.5)', function() {
            expect(mathEnforcer.addFive(5.5)).to.equal(5.5 + 5);
        });

        it('should return 2.5 on addFive(-2.5)', function() {
            expect(mathEnforcer.addFive(-2.5)).to.equal(-2.5 + 5);
        });

        it('should return 5 on addFive(0)', function() {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
    });


    describe('Tests for subtractTen(num)', function () {
        it('should return undefined on subtractTen("3")', function() {
            expect(mathEnforcer.subtractTen("2")).to.equal(undefined);
        });

        it('should return 25 on subtractTen(35)', function() {
            expect(mathEnforcer.subtractTen(35)).to.equal(25);
        });

        it('should return -30 on subtractTen(-10)', function() {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should return 5.5 on subtractTen(15.5)', function() {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(15.5 - 10);
        });

        it('should return -15.5 on subtractTen(-5.5)', function() {
            expect(mathEnforcer.subtractTen(-5.5)).to.equal(-5.5 - 10);
        });

        it('should return -10 on subtractTen(0)', function() {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
    });

    describe('Tests for sum(numA, numB)', function () {
        it('should return undefined on sum("3", 3)', function() {
            expect(mathEnforcer.sum("3", 3)).to.equal(undefined);
        });

        it('should return undefined on sum(3, "3")', function() {
            expect(mathEnforcer.sum(3, "3")).to.equal(undefined);
        });

        it('should return undefined on sum("3", "3")', function() {
            expect(mathEnforcer.sum("3", "3")).to.equal(undefined);
        });

        it('should return 6 on sum(3, 3)', function() {
            expect(mathEnforcer.sum(3, 3)).to.equal(6);
        });

        it('should return -6 on sum(-3, -3)', function() {
            expect(mathEnforcer.sum(-3, -3)).to.equal(-6);
        });

        it('should return 3 on sum(0, 3)', function() {
            expect(mathEnforcer.sum(0, 3)).to.equal(3);
        });

        it('should return 0 on sum(0, 0)', function() {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });

        it('should return 5.7 on sum(3.5, 2.2)', function() {
            expect(mathEnforcer.sum(3.5, 2.2)).to.equal(3.5 + 2.2);
        });

        it('should return -14 on sum(-2.8, -11.2)', function() {
            expect(mathEnforcer.sum(-2.8, -11.2)).to.equal(-2.8 + -11.2);
        });
    });
});