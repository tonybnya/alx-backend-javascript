const countStudents = require('./3-read_file_async');

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const msg = 'Hello Holberton School!';
const lst = 'This is the list of our students\n';
const txt = 'Number of students';

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end(msg);
  } else if (req.url === '/students') {
    res.write(lst);

    const filePath = process.argv.length > 2 ? process.argv[2] : '';

    countStudents(filePath).then((data) => {
      res.write(`${txt}: ${data.students.length}\n`);
      res.write(`${txt} in CS: ${data.csStud.length}. List: ${data.csStud.join(', ')}\n`);
      res.write(`${txt} in SWE: ${data.sweStud.length}. List: ${data.sweStud.join(', ')}`);
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, hostname);

module.exports = app;
