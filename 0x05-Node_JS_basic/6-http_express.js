const express = require('express');

const app = express();
const port = 1245;
const msg = 'Hello Holberton School!';

app.get('/', (_, res) => {
  res.send(msg);
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;
