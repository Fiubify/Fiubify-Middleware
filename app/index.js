const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Initial Setup');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
