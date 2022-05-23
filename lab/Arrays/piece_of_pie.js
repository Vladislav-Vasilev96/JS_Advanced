function piece_of_pie(arr,start,stop){
    let start_index = arr.indexOf(start);
    let stop_index = arr.indexOf(stop);
    result =[];
    for (let i = start_index ;i<=stop_index;i++){
        result.push(arr[i])
    }
    return result
}


console.log(piece_of_pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

))