const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.getElementById("greeting");
const USERNAME_KEY = "username"
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value ;
    loginForm.classList.add("hidden");
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}
if(savedUsername === null) {
    //show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
const test = document.querySelector("#range");

console.log(test);