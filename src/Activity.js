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

  getActivityByDateAndId(id, date) {
    const userActivity = this.userStepDataId(id);
    return userActivity.find(day => day.date === date);
  };
  
  getUserActivityWeek(id, date, activeStat) {
    const userStepData = this.userStepDataId(id);
    const mapDates = userStepData.map(user => user.date);
    const getDateIndex = mapDates.indexOf(date);
    const weekDates = userStepData.slice(getDateIndex - 6, getDateIndex + 1);
    return weekDates.reduce((obj, activity) => {
      obj[activity.date] = activity[activeStat];
      return obj;
    }, {})
  };

  avgActiveMinsWeek(id, date) {
    const userWeekData = this.getUserActivityWeek(id, date, 'minutesActive');
    const activeMinutes = Object.values(userWeekData)
    const totalActiveMins = activeMinutes.reduce((total, cv) => {
      total += cv;
      return total;
    }, 0 )
    return Math.round(totalActiveMins / 7);
  }


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
