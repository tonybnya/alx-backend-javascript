const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((_, response) => {
  const msg = 'Hello Holberton School!';

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(msg);
});

app.listen(port, hostname);

module.exports = app;
