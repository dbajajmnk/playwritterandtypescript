const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
const actionResult = document.querySelector('#action-result');
const loadDataButton = document.querySelector('#load-data-button');
const loadingText = document.querySelector('#loading-text');
const productList = document.querySelector('#product-list');
const counterValue = document.querySelector('#counter-value');
const increaseCounter = document.querySelector('#increase-counter');

function readCounter() {
  return Number(localStorage.getItem('counter') || '0');
}

function writeCounter(value) {
  localStorage.setItem('counter', String(value));
  counterValue.textContent = String(value);
}

writeCounter(readCounter());

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === 'user@test.com' && password === '123456') {
    loginMessage.textContent = 'Login successful';
    loginMessage.className = 'success';
    return;
  }

  loginMessage.textContent = 'Invalid login details';
  loginMessage.className = 'error';
});

document.querySelector('[data-testid="primary-action"]').addEventListener('click', () => {
  actionResult.textContent = 'Primary action clicked';
  actionResult.className = 'success';
});

document.querySelector('.secondary-action').addEventListener('click', () => {
  actionResult.textContent = 'Secondary action clicked';
  actionResult.className = 'success';
});

loadDataButton.addEventListener('click', () => {
  productList.innerHTML = '';
  loadingText.hidden = false;

  // Delayed rendering is intentional.
  // This allows students to observe Playwright auto-waiting with assertions.
  setTimeout(() => {
    loadingText.hidden = true;
    ['Laptop', 'Mobile', 'Headphone'].forEach((product) => {
      const li = document.createElement('li');
      li.textContent = product;
      productList.appendChild(li);
    });
  }, 900);
});

increaseCounter.addEventListener('click', () => {
  writeCounter(readCounter() + 1);
});
