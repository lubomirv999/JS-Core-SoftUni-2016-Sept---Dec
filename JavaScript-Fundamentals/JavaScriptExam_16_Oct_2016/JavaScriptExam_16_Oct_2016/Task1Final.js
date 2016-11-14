function arithmephile(input) {
    input.map(Number);
    let biggestResult = Number.NEGATIVE_INFINITY, sum = 1;

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= 0 && input[i] < 10){
            for (let j = 1; j < input[i].length; j++) {
                sum *= input[i + j];
            }
            if(sum > biggestResult){
                biggestResult = sum;
            }
        }
    }
    console.log(biggestResult);
}

arithmephile([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);