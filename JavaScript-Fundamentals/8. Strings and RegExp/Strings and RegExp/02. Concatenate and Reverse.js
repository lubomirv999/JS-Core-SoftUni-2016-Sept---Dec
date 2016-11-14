function concatAndReverse(input) {
    input = String(input);

    let string = '';
    for (let i = input.length - 1; i >= 0; i--) {
        string += input[i];
    }
    string = string.split(',').join('');
    console.log(string);
}

