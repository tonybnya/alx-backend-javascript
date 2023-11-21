const process = require('process');
const log = (arg) => console.log(arg);

const question = 'Welcome to Holberton School, what is your name?\n';
const endMessage = 'This important software is now closing\n';

process.stdin.setEncoding('utf-8');

process.stdout.write(`${question}`)

process.stdin.on('data', (INPUT) => {
  log(`Your name is: ${INPUT}`);
});

process.stdin.on('end', () => {
  log(`${endMessage}`);
});
