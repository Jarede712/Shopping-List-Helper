const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/seedUser', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form') //name of the login form
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form') //name of the signup form
    .addEventListener('submit', signupFormHandler);
  

const loginFormHandler = async (event) => {
    event.preventDefault();
      
    const email = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();
      
    if (email && password) {
        const response = await fetch('/api/seedUser/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to log in.');
        }
    }
    };
      