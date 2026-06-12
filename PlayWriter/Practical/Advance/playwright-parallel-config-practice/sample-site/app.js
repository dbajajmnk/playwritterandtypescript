const emailInput = document.querySelector('[data-testid="email-input"]');
const passwordInput = document.querySelector('[data-testid="password-input"]');
const loginButton = document.querySelector('[data-testid="login-button"]');
const loginMessage = document.querySelector('[data-testid="login-message"]');
const cartCount = document.querySelector('[data-testid="cart-count"]');
const cartList = document.querySelector('[data-testid="cart-list"]');
const slowSaveButton = document.querySelector('[data-testid="slow-save-button"]');
const slowSaveMessage = document.querySelector('[data-testid="slow-save-message"]');

let count = 0;

loginButton.addEventListener('click', () => {
  const isValid = emailInput.value === 'user@test.com' && passwordInput.value === '123456';
  loginMessage.textContent = isValid ? 'Login successful' : 'Invalid credentials';
  loginMessage.className = isValid ? 'success' : 'error';
});

function addToCart(productName) {
  count += 1;
  cartCount.textContent = String(count);

  const item = document.createElement('li');
  item.textContent = productName;
  cartList.appendChild(item);
}

document.querySelector('[data-testid="add-laptop"]').addEventListener('click', () => addToCart('Laptop'));
document.querySelector('[data-testid="add-mouse"]').addEventListener('click', () => addToCart('Mouse'));
document.querySelector('[data-testid="add-keyboard"]').addEventListener('click', () => addToCart('Keyboard'));

slowSaveButton.addEventListener('click', () => {
  slowSaveMessage.hidden = true;
  setTimeout(() => {
    slowSaveMessage.hidden = false;
  }, 700);
});
