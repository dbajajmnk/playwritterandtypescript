const express = require('express');
const path = require('path');

const app = express();
const port = 3073;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Assertions practice site running at http://127.0.0.1:${port}`);
});
