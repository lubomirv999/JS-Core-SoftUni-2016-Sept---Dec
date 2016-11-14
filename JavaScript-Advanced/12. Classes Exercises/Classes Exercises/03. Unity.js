class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        let result = '';
        result += this.name + '\n';
        for (let rat of this.rats) {
            result += `##${rat}\n`;
        }
        return result.trim();
    }
}