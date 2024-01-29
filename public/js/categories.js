const form = document.getElementById("category-form");

async function fetchCategories() {
  const response = await fetch("/api/categories");
  const categories = await response.json();

  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = ""; // Clear the list

  for (const category of categories) {
    addCategoryToList(category.name);
  }
}

function addCategoryToList(newCategory) {
  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = newCategory;

  // Append the new category
  const categoryList = document.getElementById("category-list");
  categoryList.appendChild(listItem);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const newCategory = formData.get("name");

  try {
    const response = await fetch("/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newCategory }),
    });

    if (response.ok) {
      // Category added successfully, you can update your UI here
      console.log("Category added successfully");
      addCategoryToList(newCategory);
    } else {
      // Handle error
      console.error("Failed to add category");
    }
  } catch (error) {
    console.error("Network error:", error);
  }

  // Reset the form
  form.reset();
});

// Fetch categories when the page is loaded
fetchCategories();
