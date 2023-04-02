const signUpHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector("#password").value.trim();

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({email, username, password}),
            headers: { 'Content-type': 'application/json'},
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
document
.querySelector('#sign-up')
.addEventListener('click', signUpHandler);

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
 document
 .querySelector("#loginBtn")
 .addEventListener("click", login);