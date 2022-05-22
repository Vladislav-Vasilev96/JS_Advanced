function circleArea(param) {
    param_type = typeof param

    if (param_type === 'number') {
        console.log((Math.PI * param ** 2).toFixed(2))
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`)
    }

}
circleArea(5)


