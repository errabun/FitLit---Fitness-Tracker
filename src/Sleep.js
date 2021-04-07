const userData = require('../data/users.js').userData;
const sleepData = require('../data/sleep.js').sleepData;
const UserRepository = require('../src/UserRepository.js');
const User = require('../src/User.js');
const SleepRepository = require('../src/SleepRepository.js');

class Sleep {
  constructor(user, userSleepData){
    this.id = user.id;
    this.userSleepData = userSleepData;
  }

  calculateHoursSleptPerDay() {
    const hoursSlept = this.userSleepData.map(element => element.hoursSlept)
    const totalHours = hoursSlept.reduce((sum, hour) => {
      sum += hour
      return sum
    }, 0)/hoursSlept.length
    return totalHours
  }

  showHoursSleptByDate(date) {
     const sleepOverDate = this.userSleepData.filter(element => date === element.date);
     const hours = sleepOverDate.map(element => element.hoursSlept);
     const [sleptHours] = hours;
     return sleptHours;
   }

   showSleepQualityByDate(date) {
     const qualityOverDate = this.userSleepData.filter(element => date === element.date);
     const num = qualityOverDate.map(element => element.sleepQuality);
     const [sleepQuality] = num;
     return sleepQuality;
   }

   showHoursSleptByWeek(date) {
    const userSleepDates = this.userSleepData.map(user => user.date);
    const getDateIndex = userSleepDates.indexOf(date);
    const sleepUserDates = this.userSleepData.slice(getDateIndex - 6, getDateIndex + 1);
    return sleepUserDates.reduce((obj, sleep) => {
      obj[sleep.date] = sleep.hoursSlept;
      return obj;
    }, {})
  }

  showSleepQualityByWeek(date) {
    const userQualityDates = this.userSleepData.map(user => user.date);
    const getDateIndex = userQualityDates.indexOf(date);
    const qualityUserDate = this.userSleepData.slice(getDateIndex - 6, getDateIndex + 1);
    return qualityUserDate.reduce((obj, sleep) => {
      obj[sleep.date] = sleep.sleepQuality;
      return obj;
    }, {})
  }

  calcAllTimeSleepAvg(sleepType) {
    const totalSleep = this.userSleepData.map(user => user[sleepType]);
    const avgSleep = totalSleep.reduce((total, hours) => {
      total += hours
      return total;
    }, 0) / totalSleep.length;
    return Math.round(100 * avgSleep) / 100;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
