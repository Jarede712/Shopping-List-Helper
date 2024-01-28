const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Handle the response from the server
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
