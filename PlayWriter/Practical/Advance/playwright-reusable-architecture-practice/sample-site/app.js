const users = {
  'user@test.com': {
    password: '123456',
    name: 'Deepak Learner',
    role: 'Customer',
  },
};

const products = [
  { id: 1, name: 'Laptop', price: 55000 },
  { id: 2, name: 'Mobile', price: 25000 },
  { id: 3, name: 'Headphones', price: 2500 },
  { id: 4, name: 'Keyboard', price: 1500 },
];

let cart = [];

const loginView = document.querySelector('#login-view');
const dashboardView = document.querySelector('#dashboard-view');
const productList = document.querySelector('#product-list');
const cartList = document.querySelector('#cart-list');
const checkoutButton = document.querySelector('#checkout-button');

function renderProducts(items) {
  productList.innerHTML = '';

  items.forEach((product) => {
    const li = document.createElement('li');
    li.className = 'product-item';
    li.setAttribute('data-testid', 'product-item');
    li.innerHTML = `
      <span>${product.name} - ₹${product.price}</span>
      <button data-product-id="${product.id}">Add To Cart</button>
    `;
    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = '';

  cart.forEach((product) => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.setAttribute('data-testid', 'cart-item');
    li.textContent = `${product.name} added to cart`;
    cartList.appendChild(li);
  });

  document.querySelector('#cart-count').textContent = String(cart.length);
  checkoutButton.disabled = cart.length === 0;
}

document.querySelector('#login-button').addEventListener('click', () => {
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const user = users[email];

  if (!user || user.password !== password) {
    document.querySelector('#login-error').hidden = false;
    return;
  }

  document.querySelector('#login-error').hidden = true;
  loginView.hidden = true;
  dashboardView.hidden = false;
  document.querySelector('[data-testid="welcome-message"]').textContent = `Welcome, ${user.name}`;
  document.querySelector('[data-testid="profile-role"]').textContent = `Role: ${user.role}`;
  renderProducts(products);
  renderCart();
});

document.querySelector('#search-button').addEventListener('click', () => {
  const keyword = document.querySelector('#search-box').value.toLowerCase();
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(keyword));
  renderProducts(filteredProducts);
});

productList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-product-id]');
  if (!button) return;

  const productId = Number(button.dataset.productId);
  const product = products.find((item) => item.id === productId);
  cart.push(product);
  renderCart();
});

checkoutButton.addEventListener('click', () => {
  document.querySelector('#checkout-message').hidden = false;
  document.querySelector('#checkout-message').textContent = 'Order placed successfully';
});

document.querySelector('#logout-button').addEventListener('click', () => {
  cart = [];
  dashboardView.hidden = true;
  loginView.hidden = false;
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
});
