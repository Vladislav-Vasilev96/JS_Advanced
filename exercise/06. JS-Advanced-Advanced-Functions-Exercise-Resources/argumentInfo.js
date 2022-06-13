function solve() {
    const params = Array.from(arguments);
    const types = {};
    params.forEach(arg => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`)


        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;


    });
    const result = (Object.entries(types).sort((a,b)=>{
        return [1]-a[1]
    }));
    for (let [type,count] of result){
        console.log(`${type} = ${count}`);
    }

}




solve('cat', 42, function () { console.log('Hello world!'); })