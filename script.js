const jokeHeader = document.getElementById("joke-header");
const punchlineBtn = document.getElementById("punchline-btn");
const newJoke = document.getElementById("new-joke");
let punchline;

function fetchJoke() {
  const queryUrl = "https://manateejokesapi.herokuapp.com/manatees/random";

  fetch(queryUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      jokeHeader.textContent = data.setup;
      punchline = data.punchline;
    });
}

fetchJoke();

function showPunchline() {
  jokeHeader.textContent = punchline;
  punchlineBtn.style.display = "none";
  newJoke.style.display = "block";
}

punchlineBtn.addEventListener("click", showPunchline);
newJoke.addEventListener("click", function () {
  location.reload();
});
