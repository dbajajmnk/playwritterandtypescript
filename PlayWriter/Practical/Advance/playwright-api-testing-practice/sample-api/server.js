const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let nextUserId = 3;
let users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@test.com',
    role: 'admin',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Regular User',
    email: 'user@test.com',
    role: 'student',
    createdAt: new Date().toISOString()
  }
];

const products = [
  { id: 1, name: 'Laptop Pro', price: 75000 },
  { id: 2, name: 'Wireless Mouse', price: 1200 },
  { id: 3, name: 'Keyboard', price: 2500 }
];

function isValidEmail(email) {
  return typeof email === 'string' && email.includes('@') && email.includes('.');
}

function findUser(id) {
  return users.find((user) => user.id === Number(id));
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'sample-api' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@test.com' && password === '123456') {
    return res.json({
      token: 'demo-token-123',
      user: {
        email: 'admin@test.com',
        role: 'admin'
      }
    });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/api/profile', (req, res) => {
  const authHeader = req.headers.authorization || '';

  if (authHeader !== 'Bearer demo-token-123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.json({
    email: 'admin@test.com',
    role: 'admin'
  });
});

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/products/search', (req, res) => {
  const query = String(req.query.q || '').toLowerCase();
  const results = products.filter((product) => product.name.toLowerCase().includes(query));
  res.json({ results });
});

app.get('/api/users', (req, res) => {
  res.json({ users });
});

app.get('/api/users/:id', (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid name and email are required' });
  }

  const newUser = {
    id: nextUserId++,
    name,
    email,
    role: role || 'student',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  return res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email, role } = req.body;

  if (!name || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid name and email are required' });
  }

  user.name = name;
  user.email = email;
  user.role = role || user.role;

  return res.json(user);
});

app.patch('/api/users/:id', (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  Object.assign(user, req.body);
  return res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const userExists = users.some((user) => user.id === Number(req.params.id));

  if (!userExists) {
    return res.status(404).json({ error: 'User not found' });
  }

  users = users.filter((user) => user.id !== Number(req.params.id));
  return res.status(204).send();
});

app.listen(port, () => {
  console.log(`Sample API running at http://127.0.0.1:${port}`);
});
