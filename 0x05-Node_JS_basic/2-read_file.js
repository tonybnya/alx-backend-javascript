const fs = require('fs');
const log = (arg) => console.log(arg);

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
