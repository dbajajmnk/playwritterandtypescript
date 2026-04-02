const button = document.getElementById("btn");

button.addEventListener("click", buttonClick);
function buttonClick() {
    console.log("Button clicked!");
}

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", loginUser);
function loginUser() {
    console.log("Login Successful");
}

const form = document.getElementById("form");
form.addEventListener("submit", validateform);
function validateform(event) {
    event.preventDefault(); // stops page reload
    if (event.target.email.value == "") {
        window.alert("Email is the required field");
    }
    else if (event.target.password.value == "") {
        window.alert("Password is the required field");
    }
    console.log("Login Successful");
}

const button1 =  document.getElementById("click");
button1.addEventListener("click",onClickAlertt)
fuction onClickAlertt()
{
window.alert("Button clicked");

}
