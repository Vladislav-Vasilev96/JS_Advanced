function bigger_half(arr) {
    arr.sort((a, b) => a - b);
    let half = Math.floor(arr.length / 2);
    return arr.slice(half);
}


console.log(bigger_half([4, 7, 2, 5]))