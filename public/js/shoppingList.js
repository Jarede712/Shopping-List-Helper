const shoppingList = document.getElementById('shopping-list');
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

  // Append the item to the appropriate category
  const categoryList = document.getElementById(`${category}-list`);
  categoryList.appendChild(newItem);

  // Clear the input fields
  nameInput.value = '';
  categoryInput.value = ''; // Reset to default
}

// Event listener for form submission
form.addEventListener('submit', function (event) {
event.preventDefault();
addItemToShoppingList();
});