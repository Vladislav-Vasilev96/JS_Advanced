function list_of_names(arr) {
    const result = arr.sort();
    let order_num = 1
    arr.forEach((el) => {
        console.log(`${order_num}.${el}`)
        order_num++
    })
}


list_of_names(["John", "Bob", "Christina", "Ema"])