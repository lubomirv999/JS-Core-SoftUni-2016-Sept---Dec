function processOddNums(input) {
    input = input.map(Number);
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if(i % 2 == 1){
            input[i] = input[i] * 2;
            result.push(input[i]);
        }
    }
    result.reverse();
    console.log(result.join(' '));
}

