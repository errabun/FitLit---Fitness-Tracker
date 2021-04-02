class Activity {
  constructor(activityData) {
    this.allStepData = activityData
  }

  returnUserStepDataId (id) {
    return this.allStepData.filter(user =>  user.userID === id);
  };

  returnUserStepDataDate(date) {
    return this.allStepData.filter(user => user.date === date);
  };

  getActivityByDateAndId(id, date) {
    const userActivity = this.returnUserStepDataId(id);
    return userActivity.find(day => day.date === date);
  }

  returnMilesWalked(date, user) {
    // will need to calculate with user stride length..need to get from users.js
    // numSteps * strideLength = totalDistance for day
    // totalDistance / 5280 => miles walked that day
  };

  activeMinsDay(id, date) {
    const userStepData = this.returnUserStepData(id);
    const findUserDate = userStepData.find(user => user.date === date);
    return findUserDate.minutesActive;
  };



}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
