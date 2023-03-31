const post_group = async (event) => {
  event.preventDefault();

  const select_game = document.querySelector("#select_game").value.trim();
  const select_platform = document.querySelector("#select_platform").value.trim();
  const select_region = document.querySelector("#select_region").value.trim();
  const select_players = document.querySelector("#select_players").value.trim();

  if (select_game && select_platform && select_region && select_players) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ select_game, select_platform, select_region, select_players}),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('#post_button')
.addEventListener('click', post_group);
