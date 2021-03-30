const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User')

describe('User', function() {
  let user1, userInfo, userData;

  beforeEach(function() {
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }
    ];

    userInfo = new UserRepository(userData);

    user1 = new User(userInfo.returnUserData(2));
  })

  it('should be a function', function() {

    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRespository', function() {

    expect(userInfo).to.be.an.instanceOf(UserRepository);
  });

  it('should be able to store a user id', function() {

    expect(user1.id).to.equal(2);
  });

  it('should be able to store a user name', function() {

    expect(user1.name).to.equal("Jarvis Considine");
  });

  it('should be able to store a user stride length', function() {

    expect(user1.strideLength).to.equal(4.5);
  });

  it('should be able to store a user daily step goal', function() {

    expect(user1.dailyStepGoal).to.equal(5000);
  });

  it('should be able to store a users friends id', function() {

    expect(user1.friends).to.deep.equal([9, 18, 24, 19]);
  });

  it('should be able to return the user\'s first name based on their id', function() {

    let userFirstName = user1.returnUserFirstName(2);

    expect(userFirstName).to.equal('Jarvis'); 
  })
})
