import Currency from './3-currency.js';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }


  get amount() {
    return this._amount;
  }


  set amount(amount) {
    this._amount = amount;
  }


  get currency() {
    return this._currency;
  }


  set currency(currency) {
    this._currency = currency;
  }


  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }


  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
