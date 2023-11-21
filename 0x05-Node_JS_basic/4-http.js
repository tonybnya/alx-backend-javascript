const http = require('http');
const hostname = '127.0.0.1';
const port = 1245;
const msg = 'Hello Holberton School!';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(msg);
});

app.listen(port, hostname);

module.exports = app;