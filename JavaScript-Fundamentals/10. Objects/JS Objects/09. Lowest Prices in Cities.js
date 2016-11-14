function lowestPricesInCities(input) {
    let products = new Map();
    let maxPrice = 0;
    let result = new Set();

    for (let obj of input){
        let [town, product, price] = obj.split(/\s+\|\s+/g);
        price = Number(price);

        if (maxPrice < price){
            maxPrice = price;
        }
        maxPrice++;

        if (!products.has(product)){
            products.set(product, new Map);
        }
        products.get(product).set(town, price);
    }
    for (let [pr, val] of products){
        let towns = products.get(pr);
        let minPrice = maxPrice;
        let town = '';

        for (let [t, p] of towns){
            if (p < minPrice){
                minPrice = p;
                town = t;
            }
        }
        result.add({product: pr, town:town, price: minPrice});
    }
    for (let obj of result){
        console.log(`${obj.product} -> ${obj.price} (${obj.town})`);
    }
}