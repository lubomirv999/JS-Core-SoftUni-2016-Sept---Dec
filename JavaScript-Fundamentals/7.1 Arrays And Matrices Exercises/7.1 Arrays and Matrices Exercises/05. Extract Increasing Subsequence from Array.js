function extractIncSubseqFromArr(input) {
    input = input.map(Number);
    let arrSize = input.length;
    let currentBiggestNum = Number.NEGATIVE_INFINITY;

    for(let i=0; i < arrSize; i++) {
        let currentNum = input.shift();

        if(currentNum >= currentBiggestNum) {
            currentBiggestNum = currentNum;
            console.log(currentNum);
        }
    }
}

