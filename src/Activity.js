class Activity {
  constructor(activityData) {
    this.allStepData = activityData
  }

  userStepDataId (id) {
    return this.allStepData.filter(user =>  user.userID === id);
  };

  allStepDataDate(date) {
    return this.allStepData.filter(user => user.date === date);
  };

  getUserActivityWeek(id, date, activeStat) {
    const userStepData = this.userStepDataId(id);
    console.log("Class: user step data:", userStepData)
    const mapDates = userStepData.map(user => user.date);
    console.log("Class: user dates:", mapDates)
    const getDateIndex = mapDates.indexOf(date);
    console.log("Class: index:", getDateIndex)
    const weekDates = userStepData.slice(getDateIndex - 6, getDateIndex + 1);
    console.log("Class : weekly dates array", weekDates);
    return weekDates.reduce((obj, activity) => {
      obj[activity.date] = activity[activeStat];
      return obj;
    }, {})
  };

  avgActiveMinsWeek(id, date) {
    const userWeekData = this.userActivityWeek(id, date);
    const activeMinutes = userWeekData.reduce((total, currentDay) => {
      total += currentDay.minutesActive;
      return total;
    }, 0)
    return Math.round(activeMinutes / 7);
  }

  getActivityByDateAndId(id, date) {
    const userActivity = this.userStepDataId(id);
    return userActivity.find(day => day.date === date);
  };

  milesWalkedDay(user, date) {
    const userStepData = this.getActivityByDateAndId(user.id, date);
    const totalDistanceDay = user.strideLength * userStepData.numSteps;
    return Math.round(100 * (totalDistanceDay / 5280)) / 100;
  };

  activeMinsDay(id, date) {
    const userStepData = this.userStepDataId(id);
    const findUserDate = userStepData.find(user => user.date === date);
    return findUserDate.minutesActive;
  };

  achievedStepGoal(user, date) {
    const userStepData = this.getActivityByDateAndId(user.id, date);
    return userStepData.numSteps > user.dailyStepGoal;
  };

  exceededStepGoalDates(user) {
    const totalUserStepData = this.returnUserStepDataId(user.id);
    return totalUserStepData.reduce((stepGoalObj, currentUser) => {
      stepGoalObj[currentUser.date] = currentUser.numSteps > user.dailyStepGoal;
      return stepGoalObj;
    }, {});
  };

  avgStairsClimbedDate(date) {
    let allUserDataDate = this.allStepDataDate(date);
    const userStairsClimbed = allUserDataDate.map(user => user.flightsOfStairs);
    const findMostStairs = Math.max(...userStairsClimbed);
    return allUserDataDate.filter(user => user.flightsOfStairs === findMostStairs)
  };

  findAvgStatOnDate(date, stat) {
    const allUserDataDate = this.allStepDataDate(date);
    return allUserDataDate.reduce((total, user) => {
      total += user[stat];
      return total;
    }, 0) / allUserDataDate.length;
  };
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
