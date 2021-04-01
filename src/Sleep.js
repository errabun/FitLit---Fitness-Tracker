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
}
