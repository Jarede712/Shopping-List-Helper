document.addEventListener("DOMContentLoaded", function () {
  const pantryList = document.getElementById('pantry-container');
  const nameInput = document.getElementById('name');
  const categoryInput = document.getElementById('category');
  const form = document.getElementById('pantry-form');

  

  // ... Rest of your JavaScript code ...
  // Function to add a new item to the pantry
function addItemToPantry() {
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
  const categoryList = document.getElementById(`${category}-inventory`);
  categoryList.appendChild(newItem);

   // Save pantry items to local storage
  savePantryItemsToLocalStorage();

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


// Function to save pantry items to local storage
function savePantryItemsToLocalStorage() {
  // Get existing pantry items from local storage (if any)
  const existingItems = JSON.parse(localStorage.getItem('pantryItems')) || {};

  // Get the current category and item name
  const category = categoryInput.value;
  const itemName = nameInput.value;

  // Add the new item to the existing category (if category doesn't exist, create it)
  existingItems[category] = existingItems[category] || [];
  existingItems[category].push(itemName);

  // Save the updated pantry items back to local storage
  localStorage.setItem('pantryItems', JSON.stringify(existingItems));
}

// Function to load pantry items from local storage
function loadPantryItemsFromLocalStorage() {
  const existingItems = JSON.parse(localStorage.getItem('pantryItems')) || {};

  // Loop through the saved items and populate the pantry
  for (const category in existingItems) {
    if (existingItems.hasOwnProperty(category)) {
      const categoryList = document.getElementById(`${category}-inventory`);
      existingItems[category].forEach(function (itemName) {
        const newItem = document.createElement('li');
        newItem.textContent = itemName;
        newItem.classList.add('new-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newItem.appendChild(checkbox);

        categoryList.appendChild(newItem);
      });
    }
  }
}

// Event listener for form submission
form.addEventListener('submit', function (event) {
event.preventDefault();
addItemToPantry();
});

// Call the function to load pantry items when the page loads
loadPantryItemsFromLocalStorage();

});


