const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data keeps this API simple for foundation-level practice.
// When the server restarts, data goes back to the default list.
let users = [
  { id: 1, name: 'Deepak', role: 'admin', active: true, address: { city: 'Delhi', country: 'India' } },
  { id: 2, name: 'Kapil', role: 'user', active: true, address: { city: 'Mumbai', country: 'India' } }
];

let nextId = 3;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'sample-api' });
});

// GET: Read all users.
app.get('/users', (req, res) => {
  const role = req.query.role;
  const result = role ? users.filter(user => user.role === role) : users;
  res.status(200).json({ count: result.length, data: result });
});

// GET: Read one user by id.
app.get('/users/:id', (req, res) => {
  const user = users.find(item => item.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json({ data: user });
});

// POST: Create a new user.
app.post('/users', (req, res) => {
  const { name, role, active, address } = req.body;

  if (!name || !role) {
    return res.status(400).json({ error: 'name and role are required' });
  }

  const user = {
    id: nextId++,
    name,
    role,
    active: active ?? true,
    address: address ?? { city: 'Unknown', country: 'Unknown' }
  };

  users.push(user);
  res.status(201).json({ created: true, data: user });
});

// PUT: Replace/update a user.
app.put('/users/:id', (req, res) => {
  const index = users.findIndex(item => item.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[index] = { ...users[index], ...req.body, id: users[index].id };
  res.status(200).json({ updated: true, data: users[index] });
});

// DELETE: Remove a user.
app.delete('/users/:id', (req, res) => {
  const before = users.length;
  users = users.filter(item => item.id !== Number(req.params.id));

  if (users.length === before) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ deleted: true });
});

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Sample API running at http://127.0.0.1:${port}`);
});
