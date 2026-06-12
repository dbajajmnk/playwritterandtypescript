const validUser = {
  email: 'user@test.com',
  password: '123456'
};

let cartCount = 0;

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const loginMessage = document.querySelector('#login-message');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-button');
const searchMessage = document.querySelector('#search-message');
const cartCountText = document.querySelector('#cart-count');
const checkoutButton = document.querySelector('#checkout-button');
const checkoutMessage = document.querySelector('#checkout-message');
const paymentButton = document.querySelector('#payment-button');
const paymentMessage = document.querySelector('#payment-message');

loginButton.addEventListener('click', () => {
  console.log('Login button clicked');

  if (emailInput.value === validUser.email && passwordInput.value === validUser.password) {
    loginMessage.textContent = 'Login successful';
    loginMessage.className = 'message success';
    return;
  }

  loginMessage.textContent = 'Invalid login';
  loginMessage.className = 'message error';
});

searchButton.addEventListener('click', () => {
  console.log('Search button clicked with value:', searchInput.value);
  const searchTerm = searchInput.value.trim().toLowerCase();
  searchMessage.textContent = searchTerm ? `Showing result for ${searchTerm}` : 'Please enter a product name';
  searchMessage.className = searchTerm ? 'message success' : 'message error';
});

document.querySelectorAll('.add-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartCountText.textContent = String(cartCount);
    checkoutButton.disabled = false;
    console.log('Product added to cart. Current count:', cartCount);
  });
});

checkoutButton.addEventListener('click', () => {
  checkoutMessage.textContent = 'Checkout completed';
  checkoutMessage.className = 'message success';
  console.log('Checkout completed');
});

paymentButton.addEventListener('click', () => {
  paymentMessage.textContent = 'Payment Failed';
  paymentMessage.className = 'message error';
  console.error('Payment failed because demo gateway is offline');
});
