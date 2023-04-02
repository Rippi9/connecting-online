const post_group = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#groupName').value.trim();
  const game = document.querySelector("#select_game").value.trim();
  const platform = document.querySelector("#select_platform").value.trim();
  const region = document.querySelector("#select_region").value.trim();
  const playercount = document.querySelector("#select_players").value.trim();
  const description = document.querySelector('#groupBio').value.trim();
 

  if (name && game && platform && region && playercount && description) {
    const response = await fetch('/api/clans', {
      method: 'POST',
      body: JSON.stringify({name,  game, platform, region, playercount, description}),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      location.reload();
      console.log(response.statusText);
    } else (err) => {
      console.log(err);
      alert(response.statusText);
      
    }
  }
};

document
.querySelector('#post_button')
.addEventListener('click', post_group);

// Logout
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/')
  } else {
    alert(response.statusText);
  }
};
document
.querySelector('#logoutBtn')
.addEventListener('click', logout);

// logout btn html selector
