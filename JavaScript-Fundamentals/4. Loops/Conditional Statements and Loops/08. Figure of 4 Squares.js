function figureOfFourSquares(input) {
    let n = Number(input[0]);
    let counter = parseInt(((2 * n) - 3) / 2);

    if (n % 2 == 0) {
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < parseInt((n - 3) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < parseInt((n - 3) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
    }
    else {
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < ((n - 4) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < ((n - 4) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
    }
}

function figureOfFourSquares ([number]){
    number = Number(number);
    let rows = number;
    if (number%2==0)
        rows = number-1;
    for (let i=1;i<=rows;i++){
        if (i==Math.round(rows/2)||i==1||i==rows)
            console.log(`+${"-".repeat(number-2)}+${"-".repeat(number-2)}+`);
        else
            console.log(`|${" ".repeat(number-2)}|${" ".repeat(number-2)}|`);
    }
}