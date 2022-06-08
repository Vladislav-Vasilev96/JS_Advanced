function addItem() {
    function addItem() {
        //select input field and read its value
        const input = document.getElementById('newItemText')
        const content = document.getElementById('newItemText').value;
        // create <li> element
        const liElement = document.createElement('li');
        // assing input value  to element  text content
        liElement.textContent = content;
        //create [Delete] anchor
        const deleteBtn = document.getElement('a');
        deleteBtn.textContent = '[Delete]';
        deleteBtn.href = '#';
        liElement.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', onDelete);

        // selected ul and append new element 
        const ulElement = document.getElementById('items');
        ulElement.appendChild(liElement);
        // select input field and clear content
        document.getElementById('newItemText').value = '';
        function onDelete (event){
            event.target.parentElement.remove();
        }
    }
}