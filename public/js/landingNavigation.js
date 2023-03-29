// Landing page login button redirect
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


// landing page signup button redirect
 const signUpNav = async () => {
  await fetch("/signUp")
  .then((response) => {
    if(response.ok) {
      document.location.replace('/signUp');
    } else {
      console.error("Error: Could not find the page you are looking for!");
    }
  })
  .catch(() => {
    console.error("Error: There has been an internal error - signUpNav function");
  })
 };
 document
 .querySelector('#signUpBtn')
 .addEventListener('click', signUpNav);