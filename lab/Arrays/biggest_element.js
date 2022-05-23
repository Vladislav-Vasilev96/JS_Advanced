function biggest_element(matrix){
    let result = matrix[0][0];
    for (let row = 0;row<matrix.length;row++){
        for (let col=0;col<matrix[row].length;col++){
            let current_num = matrix[row][col];
            if (current_num>result){
                result = current_num;
            }
        }
    }
    return result
}

