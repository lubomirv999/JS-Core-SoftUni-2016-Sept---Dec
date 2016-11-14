class Turtle {
    constructor(name, age, gender) {
        if (new.target === Turtle) {
            throw new Error("Cannot instantiate directly");
        }
        this._name = name;
        this._age = Number(age);
        this._gender = gender;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get gender(){
        return this._gender;
    }

    grow(ageToIncrease){
        this._age += ageToIncrease;
    }

    toString(){
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}`;
    }
}

module.exports = Turtle;