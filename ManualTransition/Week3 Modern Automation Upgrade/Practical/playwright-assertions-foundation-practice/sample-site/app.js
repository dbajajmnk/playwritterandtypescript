const validUser = {
  email: 'user@test.com',
  password: '123456'
};

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const loginError = document.querySelector('#login-error');
const loginSuccess = document.querySelector('#login-success');
const dashboard = document.querySelector('#dashboard');

loginButton.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  loginError.hidden = true;
  loginSuccess.hidden = true;
  dashboard.hidden = true;

  if (email === validUser.email && password === validUser.password) {
    loginSuccess.hidden = false;
    dashboard.hidden = false;

    // Hash navigation makes URL assertion simple and local.
    window.location.hash = 'dashboard';
  } else {
    loginError.hidden = false;
  }
});

const termsCheckbox = document.querySelector('#terms');
const saveProfileButton = document.querySelector('#save-profile');
const profileMessage = document.querySelector('#profile-message');

termsCheckbox.addEventListener('change', () => {
  saveProfileButton.disabled = !termsCheckbox.checked;
});

saveProfileButton.addEventListener('click', () => {
  profileMessage.hidden = false;
});

const loadProductsButton = document.querySelector('#load-products');
const productList = document.querySelector('#product-list');

loadProductsButton.addEventListener('click', () => {
  productList.innerHTML = '';

  setTimeout(() => {
    ['Laptop', 'Keyboard', 'Mouse'].forEach((product) => {
      const item = document.createElement('li');
      item.textContent = product;
      item.setAttribute('data-testid', 'product-item');
      productList.appendChild(item);
    });
  }, 400);
});

const delayedSaveButton = document.querySelector('#delayed-save');
const delayedMessage = document.querySelector('#delayed-message');

delayedSaveButton.addEventListener('click', () => {
  delayedMessage.hidden = true;

  setTimeout(() => {
    delayedMessage.hidden = false;
  }, 700);
});
