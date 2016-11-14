let Turtle = require('./Turtle');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);

        this._evkodium = evkodiumValue;
    }

    get evkodium() {
        return {
            value: this._evkodium,
            density: this._density()
        };
    }

    _density() {
        if (this._gender == 'male') {
            return this._age * 3;
        } else{
            return this._age * 2;
        }
    }

    toString() {
        return super.toString() + `\nEvkodium: ${this._evkodium * this._density()}`;
    }
}

module.exports = EvkodianTurtle;