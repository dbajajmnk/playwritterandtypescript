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

// const form = document.getElementById("form");
// let isValid = true;
// form.addEventListener("submit", validateform);
// function validateform(event) {
//     event.preventDefault(); // stops page reload
//     if (event.target.email.value == "") {
//         window.alert("Email is the required field");
//         isValid = false;
//     }
//     else if (event.target.email.value.includes("@"))
//         window.alert("Enter a valid email");
//     isValid = false;

// }
// if (isValid) {
//     console.log("Login Successful");
// }

const form = document.getElementById("form");

form.addEventListener("submit", validateform);

function validateform(event) {
    event.preventDefault();

    let isValid = true; // reset for every submit

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if (email === "") {
        alert("Email is required");
        return;
    }
    else if (!email.includes("@")) {
        alert("Enter a valid email");
        isValid = false;
    }

    if (isValid) {
        console.log("Login Successful");
    }

    if (password === "") {
        alert("password is required");
        return;
    }
    else if (password.length < 6) {
        alert("The Password must be at least 6 characters");
        return;
    }
    console.log("Login Successful");
}
const button1 = document.getElementById("button1");
button1.addEventListener("click", onClickAlertt)
function onClickAlertt() {
    window.alert("Button clicked");
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cardName = event.target.name.value; console.log(cardName);

    const cardNumber = event.target.cardNumber.value; console.log(cardNumber);

    const expiryDate = event.target.expiryDate.value; console.log(expiryDate);

});
