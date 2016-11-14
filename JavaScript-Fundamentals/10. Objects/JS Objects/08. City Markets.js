function cityMarkets(input) {
    let towns = new Map();

    for (let sale of input) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);

        let income = Number(quantity) * Number(price);

        if (!towns.has(town)) {
            towns.set(town, new Map());
            towns.get(town).set(product, income)
        } else {
            if (!towns.get(town).has(product)) {
                towns.get(town).set(product, income);
            } else {
                towns.get(town).set(product, town.get(product) + income);
            }
        }
    }
    let print='';

    for (let [index, value] of towns){
        print+=(`Town - ${index}\n`);
        for (let [product, price] of towns.get(index)){
            print+=(`$$$${product} : ${price}\n`);
        }
    }
    return print;
}

