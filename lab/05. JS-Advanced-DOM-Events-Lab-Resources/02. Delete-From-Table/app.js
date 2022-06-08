function deleteByEmail() {
    const value = document.querySelector('input[name= "email"]').value;

    let found = false   
    const rows = Array.from(document.querySelectorAll('tbody tr'))
    for (let row of rows){
        if(row.children[1].textContent== value){
            const parent = row.parentElement;
            parent.removeChild(row)
            found = true
        }
    }
    document.getElementById('result').textContent= found ?'Deleted.': 'Not found.'
    
}