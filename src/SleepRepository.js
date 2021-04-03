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
}
