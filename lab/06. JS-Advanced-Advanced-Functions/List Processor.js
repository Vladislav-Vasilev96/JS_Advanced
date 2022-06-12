function solve (input){
    let result = [];
    const functions = {
        add(word){
            result.push(word);
        },
        remove (word){
            result = result.filter(x=>x !== word);
        },
        print(){
            console.log(result.join(','));
        }
    }
    
    input.forEach(data => {
        let [command,word]= data.split(' ');
        functions[command](word)

        
    });

}






solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])