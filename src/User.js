// const userRepository = require('../src/UserRepository');

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  returnUserFirstName(id) {
    if (this.id === id) {
      const splitNameArr = this.name.split(' ');
      return splitNameArr[0];
    }
  };
}

// module.exports = User;
