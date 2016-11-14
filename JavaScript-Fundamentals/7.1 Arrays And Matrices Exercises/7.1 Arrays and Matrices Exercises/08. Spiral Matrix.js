function spiralMatrix(input) {
    input = input[0].split(" ").map(Number);
    let rows = input[0];
    let cols = input[1];
    let matrix = [];

    for(let i=0; i < rows; i++) {
        matrix.push([]);
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = rows - 1;
    let endCol = cols - 1;
    let num = 1;

    while(startRow <= endRow || startCol <= endCol) {
        for(let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num++;
        }

        for(let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endCol] = num++;
        }

        for(let i = endCol - 1; i >= startCol; i--) {
            matrix[endRow][i] = num++;
        }

        for(let i = endRow - 1; i > startRow; i--) {
            matrix[i][startCol] = num++;
        }

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
