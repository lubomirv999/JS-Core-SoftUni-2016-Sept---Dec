let Turtle = require('./Turtle');

class GalapagosTurtle extends Turtle{
    constructor(name, age, gender){
        super(name, age, gender);
        this._thingsEaten = [];
    }

    get thingsEaten(){
        return this._thingsEaten;
    }

    eat(food){
        this._thingsEaten.push(food);
    }

    grow(age) {
        super.grow(age);
        this._thingsEaten = [];
    }

    toString() {
        let res = `\nThings, eaten this year: ${this._thingsEaten.join(', ')}`;
        return super.toString() + res;
    }
}

module.exports = GalapagosTurtle;