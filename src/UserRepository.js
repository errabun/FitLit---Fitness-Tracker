const userData = require('../data/users');

class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(id) {
    return this.userData.find(element => id === element.id)
  };

  calculateTotalAverageStepGoal() {
    let avgStepGoal = this.userData.reduce((accu, cv) => {
      return Math.round((accu + cv.dailyStepGoal) / this.userData.length)
    }, 0);
    return avgStepGoal;
  };
}

module.exports = UserRepository;
