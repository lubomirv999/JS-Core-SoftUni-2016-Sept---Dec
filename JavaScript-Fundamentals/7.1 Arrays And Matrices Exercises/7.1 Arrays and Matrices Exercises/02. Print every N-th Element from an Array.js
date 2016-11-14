function printEveryNElement(input) {
    let step = Number(input[input.length - 1]);
    input.pop();
    let result = [];

    for (let i = 0; i < input.length; i+= step) {
        result.push(input[i]);
    }
    console.log(result.join('\n'));
}

printEveryNElement(['5', '20', '31', '4', '20', '2']);