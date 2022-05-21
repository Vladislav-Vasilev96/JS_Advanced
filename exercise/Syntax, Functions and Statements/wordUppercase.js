function wordUppercase(text){
    let regex = /(\w+)/g
    let match = text.match(regex)
    match = match.map(word => word.toUpperCase())
    console.log(match.join(', '))
}


wordUppercase('Hi, how are you?')