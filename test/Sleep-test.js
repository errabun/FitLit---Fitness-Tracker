const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User')
const SleepRepository = require('../src/SleepRepository');
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
  let user1, userInfo, userData, sleepRespository, sleep;

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
