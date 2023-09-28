export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(val) {
    if (typeof val === 'number' && val >= 0) {
      this._length = val;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(val) {
    if (Array.isArray(val)) {
      this._students = val;
    } else if (!val.every((student) => typeof student === 'string')) {
      throw new Error('Students must be an array of strings');
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
