// Landing page login button function
const login = async () => {
   await fetch("/login")
    .then((response) =>  {
      if (response.ok) {
        document.location.replace('/login'); 
      } else {
        console.error("Error: Could not find the page you are looking for!");
      }
    })
    .catch((error) => {
      console.log("There has been an internal issue");
    });
    
};
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", login);

// Login Page handler
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector('#password').value.trim();

  if(email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: { 'Content-Type': 'application/json'},
    })
    console.log(`${email}, Pass: ${password}`);

    if(response.ok) {
      document.location.replace ('/api/dashboard');
    } else {
      console.error('Login Failed');
    }

  }
 };

 const loginToDashboard = document.querySelector('#sign-up');
 loginToDashboard.addEventListener("click", loginFormHandler);