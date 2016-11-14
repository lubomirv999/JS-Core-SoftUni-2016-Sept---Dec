function populationInTowns(input) {
    let result = new Map();
    
    for (let data of input) {
        let [town, population] = data.split(/\s*<->\s*/);
        population = Number(population);

        if (result.has(town)){
            result.set(town, result.get(town) + population);
        } else{
            result.set(town, population);
        }
    }
    for (let [town, sum] of result)
        console.log(town + " : " + sum);
}
