const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Setter for brand
  set brand(val) {
    this._brand = val;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Setter for motor
  set motor(val) {
    this._motor = val;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Setter for color
  set color(val) {
    this._color = val;
  }

  [cloneSymbol]() {
    return new Car(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
