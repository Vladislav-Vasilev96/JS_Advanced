function rotate_arr(arr,rotation){
    for (let i=0;i<rotation;i++){
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '))

}


rotate_arr(['1',

'2',

'3',

'4'],

2)