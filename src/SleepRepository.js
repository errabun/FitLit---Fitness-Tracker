const userData = require('../data/users.js').userData;
const sleepData = require('../data/sleep.js').sleepData;
const userRepository = require('../src/UserRepository.js');
const user = require('../src/User.js');

const sleepQualityForUsers = [];

class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  returnUserSleepData(id) {
    return this.sleepData.filter(element => id === element.userID);
  }

  returnAverageSleepQuality() {
    const sleepQual = this.sleepData.map(data => data.sleepQuality)
    const averageQual = sleepQual.reduce((sum, sleepNum) => sum + sleepNum)
    return averageQual/sleepQual.length;
  }

  createSleepQualityData(date, id) {
    const singleUser = this.sleepData.filter(user => user.userID === id);
    const userQualityDates = singleUser.map(user => user.date);
    const getDateIndex = userQualityDates.indexOf(date);
    const userWeekData = singleUser.slice(getDateIndex - 6, getDateIndex + 1);
    const totalQuality = userWeekData.reduce((sum, num) => {
      sum += num.sleepQuality
      return sum
      },0) / 7;
    const sqUserAverage = {};
    sqUserAverage.id = id;
    sqUserAverage.averageQuality = totalQuality;
    sleepQualityForUsers.push(sqUserAverage);
  }

  getQualitySleepers() {
    return sleepQualityForUsers.filter(user => user.averageQuality > 3);
  }

  findHeavySleepers(date) {
    let sleepHoursUser = this.sleepData.filter(user => user.date === date)
    const sleepHours = sleepHoursUser.map(user => user.hoursSlept);
    const sleepNum = Math.max(...sleepHours);
    const heavySleepers = sleepHoursUser.filter(user => user.hoursSlept === sleepNum);
    return heavySleepers
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
