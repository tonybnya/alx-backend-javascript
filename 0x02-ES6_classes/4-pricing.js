import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(val) {
    if (typeof val === 'number') {
      this._amount = val;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(val) {
    if (val instanceof Currency) {
      this._currency = val;
    } else {
      throw new Error('Currency must be an instance of Currency');
    }
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static Method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
