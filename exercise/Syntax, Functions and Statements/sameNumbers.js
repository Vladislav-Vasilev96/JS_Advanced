function same_numbers(n){
    const str_n = n.toString();
    let result = parseInt(str_n[0]);
    let is_same = true;

    for(let i = 1; i<str_n.length; i++){
        result += parseInt(str_n[i]);
        if (str_n[i] !=str_n[i-1]){
            is_same=false
        }
    }

    
    console.log(is_same);
    console.log(result);

}

same_numbers(22252222)