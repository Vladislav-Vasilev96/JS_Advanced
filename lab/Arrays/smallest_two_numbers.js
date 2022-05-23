function smallest_two_numbers(arr){
    let result= [];
    arr.sort(function(a, b){return a-b})
    result.push(arr.shift())
    result.push(arr.shift())

    console.log(result.join(' '))

}


smallest_two_numbers([30, 15, 50, 5])