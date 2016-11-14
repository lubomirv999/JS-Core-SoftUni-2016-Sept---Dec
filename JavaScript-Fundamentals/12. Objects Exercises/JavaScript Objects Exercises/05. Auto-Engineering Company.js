function autoEngineeringCompany(input) {
    let catalogue = new Map;

    for (let line of input) {
        let tokens = line.split(/\s\|\s/);
        let [brand, model, quantity] = tokens;

        if (!catalogue.has(brand)) {
            catalogue.set(brand, new Map);
        }
        if (!catalogue.get(brand).has(model)) {
            catalogue.get(brand).set(model, 0);
        }
        catalogue.get(brand).set(model, catalogue.get(brand).get(model) + Number(quantity));
    }

    for (let [brand, models] of catalogue) {
        console.log(brand);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}