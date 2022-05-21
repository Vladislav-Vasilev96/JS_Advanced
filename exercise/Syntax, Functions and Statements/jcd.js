function jcd(a,b){
    while (b != 0){
        let t = b;
        b = a % b;
        a  = t;
    }
    console.log(a); 
}

jcd(2154, 458)