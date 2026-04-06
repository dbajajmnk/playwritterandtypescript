


function submitFun() {
    window.alert("Submit Clicked");
}



function resetFun() {

    window.alert("Page is Reset");
}
//Multiple forms apply
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

