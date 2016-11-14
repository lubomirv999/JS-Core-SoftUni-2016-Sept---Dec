function magicMatrices(input) {
    let matrix = input.map(row => row.split(" ").map(Number));
    let sum = matrix[0].reduce((a,b) => a+b);
    let isMagic = true;

    for (let i = 1; i < matrix.length; i++) {
        let sum1 = matrix[i].reduce((a,b)=> a+b);
        if (sum != sum1)
            return isMagic = false;
    }

    console.log(isMagic);
}

