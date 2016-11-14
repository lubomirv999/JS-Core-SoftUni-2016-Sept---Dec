function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;



describe("Tests for task 2", function () {
    let list;
    beforeEach('Init a list instance', () => {
        list = createList();
    });

    describe("tests for funcs", function () {
        it("Should have add func", function () {
            expect(list.hasOwnProperty('add'));
        });

        it("Should have shiftLeft func", function () {
            expect(list.hasOwnProperty('shiftLeft'));
        });

        it("Should have shiftRight func", function () {
            expect(list.hasOwnProperty('shiftRight'));
        });

        it("Should have swap func", function () {
            expect(list.hasOwnProperty('swap'));
        });

        it("Should have toString func", function () {
            expect(list.hasOwnProperty('toString'));
        });

        it('should be empty on init', function () {
            expect(list.toString()).to.equal('');
        });
    });

    describe("tests for add func", function () {
        it('should add element on add(5)', () => {
            list.add(5);
            expect(list.toString()).to.equal('5');
        });

        it('should add element on add(3)', () => {
            list.add(3);
            expect(list.toString()).to.equal('3');
        });

        it('should add element on add(0)', () => {
            list.add(0);
            expect(list.toString()).to.equal('0');
        });

        it('should add element on add(-1)', () => {
            list.add(-1);
            expect(list.toString()).to.equal('-1');
        });

        it('should add element on add(-1)', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.toString()).to.equal('1, 2, 3');
        });

        it('should add element on add(1, -2, 5)', () => {
            list.add(1);
            list.add(-2);
            list.add(5);
            expect(list.toString()).to.equal('1, -2, 5');
        });

        it('should do nothing when on add()', () => {
            list.add();
            expect(list.toString()).to.equal('');
        });

        it('should do nothing when on add("")', () => {
            list.add("");
            expect(list.toString()).to.equal("");
        });

        it('should do nothing when on add(undefined)', () => {
            list.add(undefined);
            expect(list.toString()).to.equal('');
        });

        it('should do add when on add(pesho)', () => {
            list.add("pesho");
            expect(list.toString()).to.equal('pesho');
        });

        it('should do add when on add(3.14)', () => {
            list.add(3.14);
            expect(list.toString()).to.equal('3.14');
        });

        it('should do add when on add(-3.14)', () => {
            list.add(-3.14);
            expect(list.toString()).to.equal('-3.14');
        });

        it('should do add when on add(pesho)', () => {
            list.add("pesho");
            list.add("ivan");
            list.add(2);
            list.add("4");
            list.add(5);
            expect(list.toString()).to.equal('pesho, ivan, 2, 4, 5');
        });
    });

    describe("tests for shiftLeft func", function () {
        it("should return shiftLeft left", function () {
            list.add("pesho");
            list.add("ivan");
            list.add(2);
            list.add("4");
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('ivan, 2, 4, 5, pesho');
        });
    });

    describe("tests for shiftLeft func", function () {
        it("should return shiftLeft left", function () {
            list.add("pesho");
            list.shiftLeft();
            expect(list.toString()).to.equal('pesho');
        });

        it("should return shiftLeft left", function () {
            list.add("pesho");
            list.add("ivan");
            list.shiftLeft();
            expect(list.toString()).to.equal('ivan, pesho');
        });

        it("should return shiftLeft left", function () {
            list.add("2");
            list.add("ivan");
            list.shiftLeft();
            expect(list.toString()).to.equal('ivan, 2');
        });

        it("should return shiftLeft left", function () {
            list.add("2");
            list.add("4");
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('4, 5, 2');
        });

        it("should return shiftLeft left", function () {
            list.add("");
            list.add("");
            list.shiftLeft();
            expect(list.toString()).to.equal(', ');
        });

        it("should return shiftLeft left", function () {
            list.add();
            list.add();
            list.shiftLeft();
            expect(list.toString()).to.equal(', ');
        });

        it("should return shiftLeft left", function () {
            list.data = -1;
            list.add(2);
            list.shiftLeft();
            expect(list.toString()).to.equal('2');
        });
    });



    describe("Tests for shiftRight", function () {
        it("should return shiftRight right", function () {
            list.add("pesho");
            list.shiftRight();
            expect(list.toString()).to.equal('pesho');
        });

        it("should return shiftRight right", function () {
            list.add("pesho");
            list.add("ivan");
            list.shiftRight();
            expect(list.toString()).to.equal('ivan, pesho');
        });

        it("should return shiftRight right", function () {
            list.add("2");
            list.add("ivan");
            list.shiftRight();
            expect(list.toString()).to.equal('ivan, 2');
        });

        it("should return shiftRight right", function () {
            list.add("2");
            list.add("4");
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.equal('5, 2, 4');
        });

        it("should return shiftRight right", function () {
            list.add("");
            list.add("");
            list.shiftRight();
            expect(list.toString()).to.equal(', ');
        });

        it("should return shiftRight right", function () {
            list.add(2);
            list.add(21);
            list.add(54);
            list.add('ivan');
            list.add('kiro');
            list.add(34);
            list.add('stamat');
            list.shiftRight();
            expect(list.toString()).to.equal('stamat, 2, 21, 54, ivan, kiro, 34');
        });

        it("should return shiftRight right", function () {
            list.data = -1;
            list.add(2);
            list.shiftRight();
            expect(list.toString()).to.equal('2');
        });
    });

    describe("Tests for swap func", function () {
        it("should return correct result", function () {
            list.add(2);
            list.add(2);
            list.swap(0, 1);
            expect(list.swap()).to.equal(false);
        });

        it("should return correct result", function () {
            list.add();
            list.add();
            list.swap(0, 1);
            expect(list.swap()).to.equal(false);
        });

        it("should return correct result", function () {
            list.add(21);
            list.add(12);
            list.add('ivan');
            list.shiftLeft();
            //12, ivan, 21
            list.add(2);
            //12, ivan, 21, 2
            list.shiftRight();
            //2, 12, ivan, 21
            list.swap(0, 2);
            expect(list.swap()).to.equal(false);
        });

        it("should return correct result", function () {
            list.add(10);
            list.add(12);
            list.add(-20);
            list.shiftLeft();
            //12, -20, 10
            list.add(4);
            list.add(0);
            //12, -20, 10, 4, 0
            list.shiftRight();
            //0, 12, -20, 10, 4
            list.swap(0, 2);
            expect(list.swap()).to.equal(false);
        });

        it("should return correct result", function () {
            list.add(10);
            list.add(1);
            list.add(3);
            list.swap(0, 2);
            expect(list.swap()).to.equal(false);
        });

        it("should return correct result", function () {
            list.add(2);
            list.add();
            list.add(1);
            list.swap(0, 2);
            expect(list.swap()).to.equal(false);
        });

        it("should return correct result", function () {
            list.add(5);
            list.add(2);
            list.add(3);
            list.add(1);
            list.add(4);
            list.swap(0, 2);
            expect(list.swap(0, 2)).to.equal(true);
        });

        it("should return correct result", function () {
            list.add(-1);
            list.add(-2);
            list.add(-5);
            list.add(1);
            list.add(7);
            list.swap(0, 2);
            expect(list.swap(0, 2)).to.equal(true);
        });

        it("should return correct result", function () {
            list.add(0);
            list.add(-2);
            list.add(-5);
            list.add(0);
            list.add(7);
            list.swap(0, 2);
            expect(list.swap(0, 2)).to.equal(true);
        });

        it("should return correct result", function () {
            list.add(0.5);
            list.add(-2);
            list.add(-5.75);
            list.add(0);
            list.add(7.4);
            list.swap(0, 2);
            expect(list.swap(0, 2)).to.equal(true);
        });

        it("should return incorrect result", function () {
            list.add();
            list.add();
            list.swap(0, 2);
            expect(list.swap(0, 2)).to.equal(false);
        });

        it("should return incorrect result", function () {
            list.add('dragan');
            list.add(2);
            list.swap(0, 1);
            expect(list.swap(0, 1)).to.equal(true);
        });

        it("should return incorrect result", function () {
            list.add();
            list.add(undefined);
            list.swap(0, 1);
            expect(list.swap(0, 1)).to.equal(true);
        });

        it("should return incorrect result", function () {
            list.add('');
            list.add('');
            list.swap(0, 1);
            expect(list.swap(0, 1)).to.equal(true);
        });

        it("should return incorrect result", function () {
            list.add(NaN);
            list.add(NaN);
            list.swap(0, 1);
            expect(list.swap(0, 1)).to.equal(true);
        });
    });
});
