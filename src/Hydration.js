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

  fluidOzsDrankDay(id, date) {
    let findUser = hydrationData.filter(user => {
      return user.userID === id;
    })
    let ozsDayDrank = findUser.find(user => {
      return user.date === date
    })
    return ozsDayDrank.numOunces;
  }

  fluidOzsDrankWeek(id, dateStart, dateEnd) {
    let findUserData = hydrationData.filter(user => {
      return user.userID === id;
    })
    return findUserData.filter(user => {
      return user.date >= dateStart && user.date <= dateEnd;
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
