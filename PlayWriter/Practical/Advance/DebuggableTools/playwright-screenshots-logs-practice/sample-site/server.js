const express = require('express');
const path = require('path');

const app = express();
const PORT = 3045;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok', service: 'checkout-api' });
});

app.post('/api/checkout', (req, res) => {
  const { cardNumber } = req.body;

  if (!cardNumber || cardNumber.length < 12) {
    return res.status(400).json({ message: 'Invalid payment details' });
  }

  res.json({ orderId: 'ORD-1001', message: 'Order placed successfully' });
});

app.listen(PORT, () => {
  console.log(`Screenshots and logs sample site running at http://127.0.0.1:${PORT}`);
});
