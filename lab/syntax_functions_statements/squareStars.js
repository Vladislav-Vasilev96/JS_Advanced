function squareStars(num) {
    for (let row = 1; row <= num; row++) { 
        let result = '';
        for (let col = 1;col<=num;col++){
            result+='* ';
        }
        console.log(result)
    }
}

squareStars(5)

