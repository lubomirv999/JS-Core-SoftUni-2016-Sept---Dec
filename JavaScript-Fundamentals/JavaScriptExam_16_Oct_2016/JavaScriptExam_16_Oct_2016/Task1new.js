function arithmephile(input) {
    let biggestMult = Number.NEGATIVE_INFINITY;
    let mult = 1;

    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(" ");

        if(arr[i] > 0 && arr[i] <=9){
            mult = arr[i + 1];
            mult *= arr[i];

            if(mult > biggestMult)
                biggestMult = mult;
        }
    }
    console.log(biggestMult);
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
])