function biggestElement(input) {
    let result = input.join(' ').split(' ').map(Number).sort((a, b)=>b - a);
    for (let i = 0; i < 1; i++) {
        console.log(result[0]);
    }
}

