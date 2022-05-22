function sumNumbers(n, m) {
    let num = Number(n);
    let num2 = Number(m);
    let result = 0
    for (let i = num; i <= num2; i++) {
        result += i
    }
    return result
}


console.log(sumNumbers('-8', '20' ))