function aggregateTable(input) {
    let arrCity = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let eachOne = input[i].split("|");
        let city = eachOne[1].toString().trim();
        arrCity.push(city);
        let moneyCity = eachOne[2].toString().replace(/ /g, '');
        sum += Number(moneyCity);
    }
    console.log(arrCity.join(', '));
    console.log(sum);
}

