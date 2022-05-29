function evry_n_element(array,step){
    let result = [];
    for(let i  = 0;i<array.length;i+=step){
        result.push(array[i])
    }
    return(result)
}


console.log(evry_n_element(['5',

'20',

'31',

'4',

'20'],

2))

console.log(evry_n_element(['dsa', 'asd', 'test', 'tset'], 2))