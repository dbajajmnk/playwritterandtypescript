
const sbtn = document.getElementById("sbtn")
sbtn.addEventListener("click", submitFun);

function submitFun() {
    window.alert("Submit Clicked");
}

const rbtn = document.getElementById("rbtn")
rbtn.addEventListener("click", resetFun);

function resetFun() {
    
    window.alert("Reset Clicked");
}

const form = document.getElementById("form");
form.addEventListener("submit", validateFormSubmit);

function validateFormSubmit(event) {
    event.preventDefault();

    const cardName = event.target.cardName.value.trim();
    const cardNumber = event.target.cardNumber.value.trim();
    const expiryDate = event.target.expiryDate.value.trim();

    console.log(cardName);
    console.log(cardNumber);
    console.log(expiryDate);
}

