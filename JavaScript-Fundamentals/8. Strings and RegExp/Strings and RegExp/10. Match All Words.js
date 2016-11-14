function matchAllWords(input) {
    input = String(input);
    let result = input.match(/\w+/g);
    console.log(result.join('|'));
}

