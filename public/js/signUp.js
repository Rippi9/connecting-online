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