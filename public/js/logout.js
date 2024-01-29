document.getElementById("logout").addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Hide the elements that should only be visible to logged-in users
      const loggedInElements = document.querySelectorAll(
        "nav ul li:not(:first-child)"
      );
      loggedInElements.forEach((element) => {
        element.style.display = "none";
      });

      // Show the login link
      const loginLink = document.createElement("li");
      loginLink.innerHTML = '<a href="/login">Login</a>';
      document.querySelector("nav ul").appendChild(loginLink);

      // Redirect to login page
      window.location.href = "/login";
    } else {
      const errorData = await response.json();
      console.error("Failed to log out:", errorData.error);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
});
