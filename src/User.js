const userRepository = require('./src/UserRepository');

class User {
  constructor({ id, name, strideLength, dailyStepGoal, friends }) {
    this.id,
    this.name,
    this.strideLength,
    this.dailyStepGoal,
    this.friends
  }
  //   this.id = userData.id;
  //   this.name = userData.name;
  //   this.strideLength = userData.strideLenth;
  //   this.dailyStepGoal = userData.dailyStepGoal;
  //   this.friends = userData.friends;
  // }

  returnUserFirstName(id) {
    const findUser = this.userData.find(element => id === element.id);
    const splitNameArr = findUser.name.split(' ')
    return splitNameArr[0];
  };
}

module.exports = User;
