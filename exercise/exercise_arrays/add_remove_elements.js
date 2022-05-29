function add_remove_numbers(arr){
    let result= [];
    let initial_number = 1;
    arr.forEach(element => {
        if (element=='add'){
            result.push(initial_number)

        }
        else{
            result.pop()

        }

        initial_number++
    });

    if (result.length==0){
        console.log('Empty')
    }
    else{
        console.log(result.join('\n'))
    }

}

add_remove_numbers(['add',

'add',

'add',

'add'])



add_remove_numbers(['remove', 'remove', 'remove']   )

add_remove_numbers(['add', 'add', 'remove', 'add', 'add'])