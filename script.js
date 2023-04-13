// Get the form and list elements
const form = document.querySelector('form');
const shoppingList = document.querySelector('#shopping-list');
const clearCompletedBtn = document.querySelector('#clear-completed');

// Add event listener to form submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // Get the input value and create a new list item
  const item = this.item.value.trim(); // remove leading/trailing whitespace
  const quantity_item = this.quantity.value.trim();
  if (item && quantity_item) { // check if input is not empty
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    const label = document.createElement('label');
    label.appendChild(document.createTextNode(item));
    li.appendChild(label);
    const span = document.createElement('span');
    span.className = 'quantity';
    span.appendChild(document.createTextNode(" " + "(" + quantity_item + ")"));
    li.appendChild(span);
    shoppingList.appendChild(li);
    this.reset(); // reset the form
  }
});

// Add event listener to clear completed button
clearCompletedBtn.addEventListener('click', function() {
  const completedItems = shoppingList.querySelectorAll('li input[type="checkbox"]:checked');
  completedItems.forEach(function(item) {
    item.parentNode.remove(); // remove the list item
  });
});
