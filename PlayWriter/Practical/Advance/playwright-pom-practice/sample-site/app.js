const state = {
  loggedIn: false,
  selectedProduct: null,
  cart: []
};

const products = [
  { name: 'Laptop', price: 55000 },
  { name: 'Headphones', price: 2500 },
  { name: 'Keyboard', price: 1200 }
];

function qs(selector) {
  return document.querySelector(selector);
}

function setHidden(selector, value) {
  qs(selector).hidden = value;
}

function updateCart() {
  const cartItems = qs('#cart-items');
  cartItems.innerHTML = '';

  state.cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  qs('#cart-count').textContent = String(state.cart.length);
  qs('#total-items').textContent = String(state.cart.length);
  qs('#empty-cart-message').hidden = state.cart.length > 0;
}

function addProductToCart(product) {
  state.cart.push(product);
  updateCart();
}

qs('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = qs('#login-email').value.trim();
  const password = qs('#login-password').value.trim();

  if (email === 'user@test.com' && password === '123456') {
    state.loggedIn = true;
    setHidden('#login-error', true);
    setHidden('#login-success', false);
    setHidden('#dashboard-section', false);
    qs('#welcome-message').textContent = 'Welcome user@test.com';
  } else {
    setHidden('#login-success', true);
    setHidden('#dashboard-section', true);
    setHidden('#login-error', false);
  }
});

qs('#logout-button').addEventListener('click', () => {
  state.loggedIn = false;
  setHidden('#dashboard-section', true);
  setHidden('#login-success', true);
  qs('#login-form').reset();
});

qs('#signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  setHidden('#signup-success', false);
});

qs('#search-products').addEventListener('input', (event) => {
  const search = event.target.value.toLowerCase();
  document.querySelectorAll('.product-card').forEach((card) => {
    const name = card.dataset.productName.toLowerCase();
    card.hidden = !name.includes(search);
  });
});

document.querySelectorAll('.view-product').forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    state.selectedProduct = {
      name: card.dataset.productName,
      price: Number(card.dataset.productPrice)
    };
    qs('#selected-product-name').textContent = state.selectedProduct.name;
    qs('#selected-product-price').textContent = `₹${state.selectedProduct.price}`;
    setHidden('#product-detail-section', false);
    qs('#product-detail-section').scrollIntoView({ behavior: 'instant', block: 'center' });
  });
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    addProductToCart({
      name: card.dataset.productName,
      price: Number(card.dataset.productPrice)
    });
  });
});

qs('#add-selected-product').addEventListener('click', () => {
  if (state.selectedProduct) {
    addProductToCart(state.selectedProduct);
  }
});

qs('#clear-cart-button').addEventListener('click', () => {
  state.cart = [];
  updateCart();
});

qs('#checkout-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (state.cart.length === 0) {
    setHidden('#order-success', true);
    setHidden('#order-error', false);
    return;
  }
  setHidden('#order-error', true);
  setHidden('#order-success', false);
});

updateCart();
