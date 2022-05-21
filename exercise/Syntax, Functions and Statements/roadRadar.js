function speedRestriction (speed,area){
    let motorwaySpeed=130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    
    let difference = 0;
    let speed_zone = 0;
    let over_limit = ""

    switch(area){
        case "motorway":
            speed_zone = motorwaySpeed
            break;
        case "interstate":
            speed_zone = interstate;
            break;
        case "city":
            speed_zone = city;
            break;
        case "residential":
            speed_zone =residential;
            break;
    }

    if (speed>speed_zone){
        difference = speed - speed_zone;
    }

    if (difference>0){
        if (difference<=20){
            over_limit = 'speeding';           
        }else if(difference<=40) {
            over_limit= "excessive speeding";   
        }else {
            over_limit = "reckless driving";
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_zone} - ${over_limit}`)
    }else{
        console.log(`Driving ${speed} km/h in a ${speed_zone} zone`)
    }
}

speedRestricti(21, 'residential')