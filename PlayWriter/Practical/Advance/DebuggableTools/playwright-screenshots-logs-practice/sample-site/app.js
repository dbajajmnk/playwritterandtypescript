const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const loginMessage = document.querySelector('#login-message');
const addCartBtn = document.querySelector('#add-cart-btn');
const cartMessage = document.querySelector('#cart-message');
const cardNumber = document.querySelector('#card-number');
const checkoutBtn = document.querySelector('#checkout-btn');
const checkoutMessage = document.querySelector('#checkout-message');
const consoleLogBtn = document.querySelector('#console-log-btn');
const pageErrorBtn = document.querySelector('#page-error-btn');
const errorMessage = document.querySelector('#error-message');

loginBtn.addEventListener('click', () => {
  console.log('Login button clicked');

  if (email.value === 'user@test.com' && password.value === '123456') {
    loginMessage.textContent = 'Login successful';
    loginMessage.className = 'message success';
    return;
  }

  loginMessage.textContent = 'Invalid login credentials';
  loginMessage.className = 'message error';
});

addCartBtn.addEventListener('click', async () => {
  console.log('Add to cart button clicked');

  const response = await fetch('/api/status');
  const data = await response.json();

  cartMessage.textContent = `Cart updated. API status: ${data.status}`;
  cartMessage.className = 'message success';
});

checkoutBtn.addEventListener('click', async () => {
  console.log('Checkout button clicked');

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cardNumber: cardNumber.value })
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(`Checkout failed: ${data.message}`);
    checkoutMessage.textContent = data.message;
    checkoutMessage.className = 'message error';
    return;
  }

  checkoutMessage.textContent = data.message;
  checkoutMessage.className = 'message success';
});

consoleLogBtn.addEventListener('click', () => {
  console.log('Manual console log generated from browser');
  console.warn('Manual console warning generated from browser');
  errorMessage.textContent = 'Console logs generated';
  errorMessage.className = 'message success';
});

pageErrorBtn.addEventListener('click', () => {
  errorMessage.textContent = 'Page error generated';
  errorMessage.className = 'message error';

  setTimeout(() => {
    throw new Error('Demo page error for Playwright pageerror log');
  }, 100);
});
