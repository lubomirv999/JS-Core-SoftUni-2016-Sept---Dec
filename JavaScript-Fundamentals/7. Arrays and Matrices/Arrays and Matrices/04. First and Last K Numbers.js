function firstAndLastKNumbers(input) {
    input = input.map(Number);
    let length = input[0];

    let firstRow = input.slice(1, length + 1);
    let secondRow = input.slice(input.length - length, input.length);

    console.log(firstRow);
    console.log(secondRow);
}
