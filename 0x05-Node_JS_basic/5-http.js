const students = require('./3-read_file_async');

const http = require('http');
const process = require('process');

const hostname = '127.0.0.1';
const port = 1245;

const log = (arg) => console.log(arg);

const app = http.createServer(async (req, res) => {
  const msg = 'Hello Holberton School!';
  const lst = 'This is the list of our students\n';
  const txt = 'Number of students';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end(msg);
  } else if (req.url === '/students') {
    res.write(lst);

    students(process.argv[2]).then((data) => {
      res.write(`${txt}: ${data.students.length}\n`);
      res.write(`${txt} in CS: ${data.csStud.length}. List: ${data.csStud.join(', ')}\n`);
      res.write(`${txt} in SWE: ${data.sweStud.length}. List: ${data.sweStud.join(', ')}`);
      res.end();
    }).catch((error) => res.end(error.message));
  }
});

app.listen(port, hostname);

module.exports = app;
