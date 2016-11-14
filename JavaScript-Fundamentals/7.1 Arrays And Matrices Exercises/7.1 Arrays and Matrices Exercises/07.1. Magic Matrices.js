function magicMatrix(input) {
    let matrix = [];

    for (let row = 0; row < input.length; row++) {
        let line = input[row].split(' ').map(Number);
        matrix.push(line);
    }

    let sum = matrix[0].reduce((a, b) => (a + b));  //сума на първия ред

    if (input.length == 2) {
        for (let row = 1; row < matrix.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));
            if (sum != sumRow) {
                return false;
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            let sumCol = 0;
            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }
            if (sumCol != sum) {
                return false;
            }
        }
        return true;
    } else {
        for (let row = 1; row <= input.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));
            if (sum != sumRow) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}