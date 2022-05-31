function townPopulation(list){
    let result = {}
    for (let data of list){
        const tokens  = data.split(' <-> ');
        const city = tokens[0]
        const population = Number(tokens[1])
        if (result[city]!= undefined){
            result[city] += population;
        }else{
           result[city] = population;
        }
    };
    for (let[name, pop] of Object.entries(result)){
        console.log(`${name} : ${pop}`)
    }
}



townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)


