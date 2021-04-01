class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnUserHydration(id) {
    return this.hydrationData.filter(user =>  user.userID === id);
  };

  totalAvgFluidPerDay(id) {
    const ozsPerDay = this.returnUserHydration(id);
    const totalAvg = ozsPerDay.reduce((total, user) => {
      return total + user.numOunces;
    }, 0)
    return Math.round(totalAvg / ozsPerDay.length);
  };

  fluidOzsDrankDay(id, date) {
    const findUser = this.returnUserHydration(id);
    const ozsDayDrank = findUser.find(user => {
      return user.date === this.date
    });
    return ozsDayDrank.numOunces;
  };

  fluidOzsDrankWeek(id, date) {
    const findUserData = this.returnUserHydration(id);
    const userHydrationDates = findUserData.map(user => user.date);
    const getDateIndex = userHydrationDates.indexOf(date);
    const hydrationUserDate = findUserData.slice(getDateIndex, getDateIndex + 7);
    return hydrationUserDate.reduce((obj, hydration) => {
      obj[hydration.date] = hydration.numOunces;
      return obj;
    }, {})
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
