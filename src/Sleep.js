class Sleep {
  constructor(user, userSleepData){
    this.id = user.id;
    this.userSleepData = userSleepData
  }

  calculateHoursSleptPerDay() {
    const hoursSlept = this.userSleepData.map(element => element.hoursSlept)
    const totalHours = hoursSlept.reduce((sum, hours) => {
      let total = (sum += hours)/hoursSlept.length;
      return total
    })
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

   showHoursSleptByWeek(id, date) {
    const userSleepDates = this.userSleepData.map(user => user.date);
    const getDateIndex = userSleepDates.indexOf(date);
    const sleepUserDate = this.userSleepData.slice(getDateIndex, getDateIndex + 7);
    return this.userSleepData.reduce((obj, sleep) => {
      obj[sleep.date] = sleep.hoursSlept;
      return obj;
    }, {})
  }
}
