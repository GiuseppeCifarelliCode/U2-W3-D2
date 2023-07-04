const usernameValue = document.getElementById("exampleInputText");
const formReference = document.querySelector("form");
const labelReference = document.getElementById("labelInput");

const existentUsername = localStorage.getItem("Username");
if (existentUsername) {
  labelReference.innerText = existentUsername;
} else {
  labelReference.innerText = "Username";
}

formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("Username", usernameValue.value);

  usernameValue.value = "";
  labelReference.innerText = localStorage.getItem("Username");
});

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", () => {
  localStorage.clear();
  labelReference.innerText = "Username";
});

// TIMER
let i = 0;
setInterval(() => {
  i = sessionStorage.getItem("timePassed");
  i++;
  sessionStorage.setItem("timePassed", i);
  console.log(i);
}, 1000);
