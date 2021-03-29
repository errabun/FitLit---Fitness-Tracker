const userRepository = require('./src/UserRepository');

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLenth;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  returnUserFirstName(id) {
    const findUser = this.userData.find(element => id === element.id);
    const splitNameArr = findUser.name.split(' ')
    return splitNameArr[0];
  };
}

module.exports = User;
