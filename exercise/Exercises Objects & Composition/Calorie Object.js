function calorieObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let calories = arr[i + 1];
        obj[name] = Number(calories)
    }
    console.log(obj)

}


calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])