import getListStudents from './0-get_list_students';

const students = getListStudents();

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
