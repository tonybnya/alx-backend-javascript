const fs = require('fs');

const txt = 'Number of students';
const deptCS = 'CS';
const deptSWE = 'SWE';

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
    .filter((student) => student.length === 4 && student[0] !== 'firstname');

  const csStud = students
    .filter((student) => student[3] === deptCS)
    .map((student) => student[0]);

  const sweStud = students
    .filter((student) => student[3] === deptSWE)
    .map((student) => student[0]);

  log(`${txt}: ${students.length}`);
  log(`${txt} in ${deptCS}: ${csStud.length}. List: ${csStud.join(', ')}`);
  log(`${txt} in ${deptSWE}: ${sweStud.length}. List: ${sweStud.join(', ')}`);
};

module.exports = countStudents;
