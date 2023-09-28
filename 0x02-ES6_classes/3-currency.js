export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    } else {
      throw new Error('Code must be a string');
    }
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

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
