(function () {
    let ingredients = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function restock(ingredient, quantity) {
        ingredients[ingredient] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        for (let ingredient of Object.keys(recipes[recipe])) {
            let totalquantity = recipes[recipe][ingredient] * quantity;
            if (ingredients[ingredient] < totalquantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let ingredient of Object.keys(recipes[recipe])) {
            ingredients[ingredient] -= recipes[recipe][ingredient] * Number(quantity);
        }
        return 'Success';
    }

    function report() {
        return [...Object.keys(ingredients)]
            .map(x => x + '=' + ingredients[x])
            .join(' ');
    }

    return function commandProcessor(input) {
        let tokens = input.split(/ /);
        let cmdName = tokens.shift();
        let args = tokens;

        switch (cmdName) {
            case 'prepare':
                return prepare(...args);
                break;
            case 'restock':
                return restock(...args);
                break;
            default:
                return report();
                break;
        }
    }
})()