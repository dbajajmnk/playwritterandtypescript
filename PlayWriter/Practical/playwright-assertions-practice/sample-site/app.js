const loginPage = document.querySelector('#login-page');
const dashboardPage = document.querySelector('#dashboard-page');
const loadingMessage = document.querySelector('#loading-message');
const loginForm = document.querySelector('#login-form');
const loginError = document.querySelector('#login-error');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const searchSummary = document.querySelector('#search-summary');
const searchResults = document.querySelector('#search-results');
const cartBadge = document.querySelector('#cart-badge');
const cartItems = document.querySelector('#cart-items');
const contactForm = document.querySelector('#contact-form');
const acceptTerms = document.querySelector('#accept-terms');
const submitContact = document.querySelector('#submit-contact');
const contactError = document.querySelector('#contact-error');
const contactSuccess = document.querySelector('#contact-success');
const adminPanel = document.querySelector('#admin-panel');
const switchRole = document.querySelector('#switch-role');
const saveButton = document.querySelector('#save-button');
const saveMessage = document.querySelector('#save-message');

const products = ['Laptop', 'Phone', 'Mouse'];
let cartCount = 0;
let isAdmin = true;

function showRoute() {
  const path = window.location.pathname;
  const isDashboard = path === '/dashboard';

  loginPage.classList.toggle('active-page', !isDashboard);
  dashboardPage.classList.toggle('active-page', isDashboard);

  document.title = isDashboard
    ? 'Dashboard - TechLambda Assertion Practice'
    : 'TechLambda Assertion Practice';
}

window.addEventListener('popstate', showRoute);
showRoute();

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loginError.hidden = true;
  loadingMessage.hidden = false;

  setTimeout(() => {
    loadingMessage.hidden = true;

    if (loginEmail.value === 'user@test.com' && loginPassword.value === '123456') {
      history.pushState({}, '', '/dashboard');
      showRoute();
      return;
    }

    loginError.hidden = false;
  }, 250);
});

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  const matchedProducts = products.filter((product) => product.toLowerCase().includes(query));

  searchResults.innerHTML = '';
  matchedProducts.forEach((product) => {
    const item = document.createElement('li');
    item.className = 'search-result-item';
    item.textContent = product;
    searchResults.appendChild(item);
  });

  searchSummary.textContent = `${matchedProducts.length} result(s) found`;
});

document.querySelectorAll('.add-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.name;
    const item = document.createElement('li');
    item.className = 'cart-item';
    item.textContent = productName;
    cartItems.appendChild(item);
    cartCount += 1;
    cartBadge.textContent = String(cartCount);
  });
});

acceptTerms.addEventListener('change', () => {
  submitContact.disabled = !acceptTerms.checked;
  contactError.hidden = acceptTerms.checked;
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!acceptTerms.checked) {
    contactError.hidden = false;
    return;
  }
  contactSuccess.hidden = false;
});

switchRole.addEventListener('click', () => {
  isAdmin = !isAdmin;
  adminPanel.hidden = !isAdmin;
  switchRole.textContent = isAdmin ? 'Switch To Regular User' : 'Switch To Admin';
});

saveButton.addEventListener('click', () => {
  saveMessage.hidden = true;
  setTimeout(() => {
    saveMessage.hidden = false;
  }, 700);
});
