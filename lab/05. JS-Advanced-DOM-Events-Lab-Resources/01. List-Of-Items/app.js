function addItem() {
    //select input field and read its value
    const input = document.getElementById('newItemText')
    const content = document.getElementById('newItemText').value;
    // create <li> element
    const liElement = document.createElement('li');
    // assing input value  to element  text content
    liElement.textContent = content;
    // selected ul and append new element 
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    // select input field and clear content
    document.getElementById('newItemText').value = '';
}