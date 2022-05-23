function sum_first_last(array){
    let first = Number(array.shift());
    let last = Number(array.pop());
    return last+first
}


console.log (sum_first_last(['20', '30', '40']))