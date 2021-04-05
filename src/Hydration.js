class Hydration {
  constructor (userData) {
    this.id = userData.userID;
    this.date = userData.date;
    this.numOunces = userData.numOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
