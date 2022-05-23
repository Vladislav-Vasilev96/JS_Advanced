function diagonalSum(matrix) {
    let primary_diagonal = 0
    let secondary_diganoal = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row === col) {
                primary_diagonal += matrix[row][col]
            } if ((row + col) == (matrix.length - 1)) {
                secondary_diganoal += matrix[row][col]
            }
        }
    }
    console.log(primary_diagonal, secondary_diganoal)
}


diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
)