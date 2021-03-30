// const userData = require('../data/users').userData;

class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(id) {
    return this.userData.find(element => id === element.id);
  };

  calculateTotalAverageStepGoal() {
    let avgStepGoal = this.userData.reduce((accu, cv) => {
      return accu + cv.dailyStepGoal;
    }, 0);
    return Math.round(avgStepGoal / this.userData.length);
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
