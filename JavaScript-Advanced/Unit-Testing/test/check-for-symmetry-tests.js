function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect;

describe("isSymmetric(arr)", function () {
    it("should return true for [1,2,3,3,2,1]", function(){
        let expectedSum = true;
        let actualSum = isSymmetric([1,2,3,3,2,1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return false for [1,2,3,4,2,1]", function(){
        let expectedSum = false;
        let actualSum = isSymmetric([1,2,3,4,2,1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return true for []", function(){
        let expectedSum = true;
        let actualSum = isSymmetric([]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return true for [-1,2,-1]", function(){
        let expectedSum = true;
        let actualSum = isSymmetric([-1,2,-1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return false for [-1,2,1]", function(){
        let expectedSum = false;
        let actualSum = isSymmetric([-1,2,1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return true for [5, 'hi',{a:5}, new Date(),{a:5}, 'hi', 5]", function(){
        let expectedSum = true;
        let actualSum = isSymmetric([5, 'hi',{a:5}, new Date(),{a:5}, 'hi', 5]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return false for [5, 'hi',{a:5}, new Date(),{X:5}, 'hi', 5]", function(){
        let expectedSum = true;
        let actualSum = isSymmetric([5, 'hi',{a:5}, new Date(),{a:5}, 'hi', 5]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return false for 1,2,2,1", function(){
        let expectedSum = false;
        let actualSum = isSymmetric(1,2,2,1);
        expect(actualSum).to.be.equal(expectedSum);
    });
});

