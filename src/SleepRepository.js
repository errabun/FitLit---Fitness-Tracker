class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  returnUserSleepData(id) {
    return this.sleepData.filter(element => id === element.userID);
  }
}
