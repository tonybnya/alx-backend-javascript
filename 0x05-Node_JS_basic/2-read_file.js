const fs = require('fs');
const log = (arg) => console.log(arg);

const countStudents = (path) => {
  // If the database file cannot be readed
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // File reading process
  const data = fs.readFileSync(path, 'utf-8');

  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .filter((student) => student.length === 4 && student[0] !== 'firstname');

  const CS = students
    .filter((student) => student[3] === 'CS')
    .map((student) => student[0]);

  const SWE = students
    .filter((student) => student[3] === 'SWE')
    .map((student) => student[0]);

  log(`Number of students: ${students.length}`);
  log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
};

module.exports = countStudents;
