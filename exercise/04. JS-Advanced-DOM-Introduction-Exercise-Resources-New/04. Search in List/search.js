function search() {
   const listElements = document.querySelectorAll('#towns li');
   const searchText = document.getElementById('searchText').value;
   let counter = 0
   for (const element of listElements) {
       if (element.textContent.includes(searchText)) {
           counter++
           element.style.textDecoration = 'underline';
           element.style.fontWeight = 'bold';
       } else {
           element.style.textDecoration = '';
           element.style.fontWeight = '';
       }
   }
   document.getElementById('result').textContent = `${counter} matches found`
}
