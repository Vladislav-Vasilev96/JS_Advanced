function addItem() {
    newItemText = document.getElementById('newItemText');
    newItemValue = document.getElementById('newItemValue');
    select = document.getElementById('menu');

    let optionElement= document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value=newItemValue.value;

    select.appendChild(optionElement)
    newItemText.value ='';
    newItemValue.value = '';
}