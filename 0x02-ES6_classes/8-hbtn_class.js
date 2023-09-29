export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(val) {
    this._size = val;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(val) {
    this._location = val;
  }

  // Casting into a Number
  valueOf() {
    return this.size;
  }

  // Casting into a String
  toString() {
    return this.location;
  }
}
