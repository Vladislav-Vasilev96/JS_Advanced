function sorting_numbers(arr) {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    const result = [];
    const count = Math.floor(arr.length / 2)
    for (let i = 0; i < count; i++) {
        result.push(arr[i]);
        result.push(arr[arr.length - 1 - i]);
    }
    return result
}


console.log(sorting_numbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

function solve (arr){
    arr = arr.sort((a,b)=>{
        return a-b;
    })
    const result = [];

    while (arr.length != 0){
        result.push(arr.shift(),arr.pop());
    }
    return result 
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))