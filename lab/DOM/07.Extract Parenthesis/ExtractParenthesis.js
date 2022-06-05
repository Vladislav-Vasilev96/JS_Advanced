function extract(content) {
    const text = document.getElementById(content).textContent
    const pattern = /\((.+?)\)/g;
    let match  = pattern.exec(text);
    let result = ''
    while(match!=null){
        
        result+=match[1]+'; ';
        match= pattern.exec(text);
        
    } 
    return result

}