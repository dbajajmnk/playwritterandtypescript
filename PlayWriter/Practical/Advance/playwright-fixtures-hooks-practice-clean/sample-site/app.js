const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
const dashboard = document.querySelector('#dashboard');
const welcomeMessage = document.querySelector('#welcome-message');
const logoutButton = document.querySelector('#logout-button');
const cartCount = document.querySelector('#cart-count');
const cartItems = document.querySelector('#cart-items');
const cartStatus = document.querySelector('#cart-status');
const clearCartButton = document.querySelector('#clear-cart-button');
const profileSaveButton = document.querySelector('#save-profile-button');
const profileSaveMessage = document.querySelector('#profile-save-message');

let cart = [];

function renderCart() {
  cartCount.textContent = String(cart.length);
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartStatus.textContent = 'Cart is empty.';
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItems.appendChild(li);
  });

  cartStatus.textContent = `${cart.length} item(s) in cart.`;
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email === 'user@test.com' && password === '123456') {
    loginMessage.textContent = 'Login successful';
    loginMessage.className = 'success';
    dashboard.classList.remove('hidden');
    welcomeMessage.textContent = 'Welcome, Regular User';
    window.location.hash = 'dashboard';
  } else {
    loginMessage.textContent = 'Invalid credentials';
    loginMessage.className = 'error';
  }
});

logoutButton.addEventListener('click', () => {
  dashboard.classList.add('hidden');
  loginMessage.textContent = 'Logged out successfully';
  loginMessage.className = 'success';
  window.location.hash = 'home';
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cart.push(button.dataset.product);
    renderCart();
  });
});

clearCartButton.addEventListener('click', () => {
  cart = [];
  renderCart();
});

profileSaveButton.addEventListener('click', () => {
  profileSaveMessage.hidden = false;
});

renderCart();
