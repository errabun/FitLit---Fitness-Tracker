class Hydration {
  constructor (id, date) {
    this.id = id;
    this.date = date;
    this.numOunces = hydrationData.numOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
