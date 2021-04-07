const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository.js');
const User = require('../src/User.js')
const SleepRepository = require('../src/SleepRepository.js');
const Sleep = require('../src/Sleep.js');

describe('Sleep', function() {
  let user, userRepository, userData, sleepRespository, sleep, sleepData;

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
      8,
      49
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
  },
];

    sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
   {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
   {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 5,
    "sleepQuality": 4.7
  },
   {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
   {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 5
  },
   {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
   {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
   {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
];

userRepository = new UserRepository(userData);

user = new User(userRepository.returnUserData(3));

sleepRepository = new SleepRepository(sleepData);

sleep = new Sleep(user, sleepRepository.returnUserSleepData(3))

})

it('should be a function', function() {

  expect(Sleep).to.be.a('function');
})

it('should be an instance of Sleep', function() {

  expect(sleep).to.be.an.instanceOf(Sleep);
})

it('should have an id and sleep data property', function() {

  expect(sleep.id).to.equal(3);
  expect(sleep.userSleepData).to.deep.equal([
  { userID: 3, date: '2019/06/15', hoursSlept: 5, sleepQuality: 4.7 },
  { userID: 3, date: '2019/06/16', hoursSlept: 7, sleepQuality: 4.7 },
  { userID: 3, date: '2019/06/17', hoursSlept: 8, sleepQuality: 5 },
  { userID: 3, date: '2019/06/18', hoursSlept: 10, sleepQuality: 6 },
  { userID: 3, date: '2019/06/19', hoursSlept: 10, sleepQuality: 6 },
  { userID: 3, date: '2019/06/20', hoursSlept: 10, sleepQuality: 6 },
  { userID: 3, date: '2019/06/21', hoursSlept: 10, sleepQuality: 6 }
  ])
})

it('should calculate average hours sleep per day for individual user', function() {

  let sleepNum = sleep.calculateHoursSleptPerDay()

  expect(sleepNum).to.equal(8.571428571428571);
})

it('should show the number of hours slept on a specified day', function() {

  let hour = sleep.showHoursSleptByDate("2019/06/16")

  expect(hour).to.equal(7);
})

it('should show sleep quality on a specified day', function() {

  let quality = sleep.showSleepQualityByDate("2019/06/16")

  expect(quality).to.equal(4.7);
})

it('should return an object of hours slept in specified week', function() {

  let sleepWeek = sleep.showHoursSleptByWeek("2019/06/21")

  expect(sleepWeek).to.deep.equal({
  '2019/06/15': 5,
  '2019/06/16': 7,
  '2019/06/17': 8,
  '2019/06/18': 10,
  '2019/06/19': 10,
  '2019/06/20': 10,
  '2019/06/21': 10
})
})

it('should return an object of sleep quality in specified week', function() {

  let sleepQual = sleep.showSleepQualityByWeek("2019/06/21")

  expect(sleepQual).to.deep.equal({
  '2019/06/15': 4.7,
  '2019/06/16': 4.7,
  '2019/06/17': 5,
  '2019/06/18': 6,
  '2019/06/19': 6,
  '2019/06/20': 6,
  '2019/06/21': 6
  })
})

it('should calculate all time sleep average for a user', function() {

  let avgSleepHours = sleep.calcAllTimeSleepAvg('hoursSlept')

  expect(avgSleepHours).to.equal(8.57);
})

it('should calculate all time sleep Quality for a user', function() {

  let avgSleepQuality = sleep.calcAllTimeSleepAvg('sleepQuality')

  expect(avgSleepQuality).to.equal(5.49);
  })
})
