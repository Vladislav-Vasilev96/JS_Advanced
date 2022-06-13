function solve(arr, type) {
    if (type === 'asc') {
        arr.sort((a, b) => a - b);
    } else {
        arr.sort((a, b) => b - a);
    }
    return arr
}


function sovle2() {
    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };
    arr.sort(methods[type]);
    return arr
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log((solve([14, 7, 17, 6, 8], 'desc')))