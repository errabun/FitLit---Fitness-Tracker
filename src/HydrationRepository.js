class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnUserHydration(id) {
    return this.hydrationData.filter(user =>  user.userID === id);
  };

  totalAvgFluidPerDay(id) {
    let ozsPerDay = this.returnUserHydration(id);
    let totalAvg = ozsPerDay.reduce((total, user) => {
      return total + user.numOunces;
    }, 0)
    return Math.round(totalAvg / ozsPerDay.length);
  };

  fluidOzsDrankDay(id, date) {
    let findUser = this.returnUserHydration(id);
    let ozsDayDrank = findUser.find(user => {
      return user.date === this.date
    });
    return ozsDayDrank.numOunces;
  };

  fluidOzsDrankWeek(id, dateStart, dateEnd) {
    let findUserData = this.returnUserHydration(id);
    let weekOzDrank = findUserData.filter(user => {
      return user.date >= dateStart && user.date <= dateEnd;
    })
    return weekOzDrank; 
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
