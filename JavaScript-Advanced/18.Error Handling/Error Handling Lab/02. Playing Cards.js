class Card{
    constructor(face, suit){
        this.face = face;
        this.suit = suit;
    }

    get face(){
        return this._face;
    }

    set face(val){
        const totalFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (!totalFaces.includes(val))
            throw new Error('Invalid face');

        this._face = val;
    }

    get suit(){
        return this._suit;
    }

    set suit(val){
        const totalFaces = ['S', 'D', 'H', 'C'];

        if (!totalFaces.includes(val))
            throw new Error('Invalid suit');

        if(val == 'S')
            this._suit = '\u2660';

        if(val == 'H')
            this._suit = '\u2665';

        if(val == 'D')
            this._suit = '\u2666';

        if(val == 'C')
            this._suit = '\u2663';
    }

    toString(){
        return this.face + this.suit;
    }
}