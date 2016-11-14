function diagAttack(input) {
    let matrix = input.map(row => row.split(' ').map(Number));

    let mainDiag = 0;
    let secondDiag = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainDiag += matrix[row][row];
        secondDiag += matrix[row][matrix[row].length - row -1];
    }

    if (mainDiag == secondDiag){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row == col || row + col + 1 == matrix.length){
                    continue;
                }
                matrix[row][col] = mainDiag;
            }
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
