const form = document.getElementById('category-form')

function addCategoryToList(newCategory) {
    // Create a new list item 
    const listItem = document.createElement('li');
    listItem.textContent = newCategory;

    // Append the new category
    const categoryList = document.getElementById('category-list');
    categoryList.appendChild(listItem);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const newCategory = formData.get('name'); 


// Add category to database
    document.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const name = document.querySelector('#name').value;
        
        try {
            const response = await fetch('/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        
        if (response.ok) {
            // Category added successfully, you can update your UI here
            console.log('Category added successfully');
        } else {
            // Handle error
            console.error('Failed to add category');
        }
        } catch (error) {
        console.error('Network error:', error);
        }
    });

    // If the category is added successfully, call the function to add it to the list
    addCategoryToList(newCategory);

    // Reset the form
    form.reset();
});
