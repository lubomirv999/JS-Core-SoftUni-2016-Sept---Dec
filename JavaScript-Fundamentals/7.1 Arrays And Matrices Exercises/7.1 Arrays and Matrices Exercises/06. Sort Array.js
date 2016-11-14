function sortArr(input) {
    let result = input.sort().sort((a, b)=>a.length > b.length);
    console.log(result.join('\n'));
    // second sort is sorting alphabetic and ascending order, the first sort is sorting the lengths
}