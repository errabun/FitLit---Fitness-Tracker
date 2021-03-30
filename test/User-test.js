const chai = require('chai');
const expect = chai.expect;

const userRepository = require('../src/UserRepository');

describe('User', function() {
  let user;

  beforeEach(function() {

    user = new User(userData[18]);
  })

  it.skip('should be a function', function() {

    expect(UserRepository).to.be.a('function');
  });

  it.skip('should be an instance of UserRespository', function() {

    expect(userRepository).to.be.an.instanceOf(UserRepository);
  });
})
