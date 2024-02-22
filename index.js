const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('helllo');
});

app.listen(8000, () => {
  console.log('server started');
});
