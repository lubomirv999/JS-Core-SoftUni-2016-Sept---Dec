function diagSum(input) {
    let result = input.map(row=>row.split(' ').map(Number));

    let mainDSum = 0;
    let secDSum = 0;

    for (let row = 0; row < result.length; row++) {
        mainDSum += result[row][row];
        secDSum += result[row][result.length - row - 1]
    }
    console.log(mainDSum + ' ' + secDSum);
}

