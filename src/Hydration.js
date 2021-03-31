class Hydration {
  constructor () {}

  totalAvgFluidPerDay(id) {
    let ozsPerDay = hydrationData.filter(user => {
      return user.userID === id;
    })
    let totalAvg = ozsPerDay.reduce((total, user) => {
      total += user.numOunces;
      return total;
    }, 0) / ozsPerDay.length;
    return totalAvg;
  }



}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
