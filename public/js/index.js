// Landing page login button function
const loginBtn = document.querySelector("#loginBtn");
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
loginBtn.addEventListener("click", login);
