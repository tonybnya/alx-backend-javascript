const process = require('process');

const question = 'Welcome to Holberton School, what is your name?\n';
const endMessage = 'This important software is now closing\n';

process.stdin.setEncoding('utf-8');

process.stdout.write(question);

process.stdin.on('readable', () => {
  const INPUT = process.stdin.read();

  if (INPUT) {
    process.stdout.write(`Your name is: ${INPUT}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write(endMessage);
});
