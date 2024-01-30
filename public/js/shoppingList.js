const shoppingList = document.getElementById('shopping-container');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const form = document.getElementById('shopping-list-form');

// Function to add a new item to the shopping list
function addItemToShoppingList() {
  const itemName = nameInput.value;
  const category = categoryInput.value;

  // Create a new list item
  const newItem = document.createElement('li');
  newItem.textContent = itemName;
  newItem.classList.add('new-item'); // Add the class for styling

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newItem.appendChild(checkbox);

  // Append the item to the appropriate category
  const categoryList = document.getElementById(`${category}-list`);
  categoryList.appendChild(newItem);

  // Clear the input fields
  nameInput.value = '';
  categoryInput.value = ''; // Reset to default
}

document.getElementById('remove-checked-items').addEventListener('click', function () {
  const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  // remove parent list items
  checkedCheckboxes.forEach(function (checkbox) {
    const listItem = checkbox.closest('li');
    if (listItem) {
      listItem.remove();
    }
  });
});

// Event listener for form submission
form.addEventListener('submit', function (event) {
event.preventDefault();
addItemToShoppingList();
});