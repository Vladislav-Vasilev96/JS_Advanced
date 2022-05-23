function negative_positive(arr){
    let result = [];
    for (let i = 0;i<arr.length;i++){
        if (arr [i]<0){
            result.unshift(arr[i])
        }
        else{
            result.push(arr[i])
        }
    }  
    return(result.join("\n"))
}

console.log(negative_positive([3, -2, 0, -1]))