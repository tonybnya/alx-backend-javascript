import getListStudents from './0-get_list_students';

const students = getListStudents();

export default function getStudentIdsSum(students) {
  const init = 0;
  const idSum = students.reduce((acc, student) => acc + student.id, init);

  return idSum;
}
