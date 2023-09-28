export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(aName) {
    if (typeof aName === 'string') {
      this._name = aName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(aLength) {
    if (typeof aLength === 'number' && aLength >= 0) {
      this._length = aLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(someStudents) {
    if (Array.isArray(someStudents)) {
      this._students = someStudents;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
