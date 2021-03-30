const chai = require('chai');
const expect = chai.expect;

// const userData = require('../data/users');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {
  let userRepository;

  beforeEach(function() {
    userRepository = new UserRepository({
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
    })
  })

  it('should be a function', function() {

    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRespository', function() {

    expect(userRepository).to.be.an.instanceOf(UserRepository);
  });

  it('should be able to store a users data', function() {

    expect(userRepository.userData).to.deep.equal({
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
    });
  });

  it('should be able to return users data by their id', function() {

    expect(userRepository.returnUserData(1)).to.deep.equal({
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
    });
  });
})
