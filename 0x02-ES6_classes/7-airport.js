export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(val) {
    this._name = val;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for name
  set code(val) {
    this._code = val;
  }

  toString() {
    return `[${typeof this} ${this.code}]`;
  }
}
