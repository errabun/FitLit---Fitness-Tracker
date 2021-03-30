const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users');

describe('UserRespository', function() {
  let userRepository;

  beforeEach(function() {
    userRepository = new UserRespository(userData[18])
  })

  it('should be a function', function() {

    expect(UserRespository).to.be.a('function');
  });

  it('should be an instance of UserRespository', function() {

    expect(userRepository).to.be.an.instanceOf(UserRespository);
  });
})
