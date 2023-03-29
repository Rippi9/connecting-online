

// // Login Page handler
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector('#password').value.trim();

  if(email && password) {
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: { 'Content-Type': 'application/json'},
    });
    

    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.error('Login Failed');
    }

  }
 };

 const loginToDashboard = document.querySelector('#login-form');
 loginToDashboard.addEventListener("submit", loginFormHandler);