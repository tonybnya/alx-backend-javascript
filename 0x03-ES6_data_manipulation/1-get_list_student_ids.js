export default function getListStudentIds(students) {
  if (!Array.isArray(arrObj)) {
    return [];
  }

  return students.map((student) => student.id);
}
