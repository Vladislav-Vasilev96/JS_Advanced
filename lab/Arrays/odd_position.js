function odd_positions(arr) {
    let result = [];
    let odd = arr.filter((x, y) => y % 2);
    for (const x of odd.reverse()){
        result.push(x*2);
    }

    return (result.join(' '));
}



console.log(odd_positions([10, 15, 20, 25]))
console.log(odd_positions([3, 0, 10, 4, 7, 3]))