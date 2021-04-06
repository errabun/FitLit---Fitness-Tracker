const userInfo = new UserRepository(userData)
let firstUser = new User(userInfo.returnUserData(3));

const sleepInfo = new SleepRepository(sleepData);
let sleepUser1 = new Sleep(firstUser, sleepInfo.returnUserSleepData(3));

let userActivity = new Activity(activityData);
let hydrationInfo = new HydrationRepository(hydrationData);


const greeting = document.querySelector('#greeting');
const friends = document.querySelectorAll('.friend');
const userStep = document.querySelector('#userStepGoal');
const averageStep = document.querySelector('#averageStepGoal');
const chart = document.getElementById('myChart');
const date = document.querySelector('#date');
const dayDrink = document.querySelector('#dayDrink');
const hoursSleptDay = document.getElementById('hoursSlept');
const sleepQualityDay = document.getElementById('sleepQuality');
const sleepChart = document.getElementById('myChartSleep');
const avgSleepHours = document.getElementById('avgSleepHours');
const avgSleepQuality = document.getElementById('avgSleepQuality');
const userStepsDay = document.getElementById('steps-day');
const userMinsActiveDay = document.getElementById('mins-active-day');
const distanceWalked = document.getElementById('distance-day');
const stepComparison = document.getElementById('steps-compare');
const minsActiveCompare = document.getElementById('active-compare');
const stairsComparison = document.getElementById('stairs-compare');
const activityChart = document.getElementById('activity-chart');
const minutesChart = document.getElementById('minutes-chart');
const stairsChart = document.getElementById('stairs-chart');

window.addEventListener('load', generateFirstUser);
date.addEventListener('input', displayWidgetsData);

function displayWidgetsData() {
  displayHydrationData();
  displaySleepData();
  displayActivityData();
}

function generateFirstUser() {
  // const firstUser = new User(userInfo.returnUserData(3));
  greeting.innerText = `Welcome, ${firstUser.returnUserFirstName(3)}`;
  displayFriends();
  displayStepGoal();
  displayHydrationData();
  displaySleepData();
  displayActivityData();
};

function displayFriends() {
  let arrayOfFriends = firstUser.friends.map(friend => {
    let friendsInfo = userInfo.userData.find(user => {
      return user.id === friend;
    })
    return friendsInfo.name;
  })
  friends[0].innerText = arrayOfFriends[0];
  friends[1].innerText = arrayOfFriends[1];
  friends[2].innerText = arrayOfFriends[2];
  friends[3].innerText = arrayOfFriends[3];
};

function displayActivityData() {
  const userStepCount = userActivity.getActivityByDateAndId(3, returnUserSelectedDate()).numSteps;
  userStepsDay.innerText = `Step Count: ${userStepCount}`;
  const userMinsActive = userActivity.getActivityByDateAndId(3, returnUserSelectedDate()).minutesActive;
  const userFlightsClimbed = userActivity.getActivityByDateAndId(3, returnUserSelectedDate()).flightsOfStairs;
  userMinsActiveDay.innerText = `Minutes Active: ${userMinsActive}`;
  const distanceWalkedDay = userActivity.milesWalkedDay(firstUser, returnUserSelectedDate());
  distanceWalked.innerText = `Distance walked: ${distanceWalkedDay}`;
  const avgStepsAll = userActivity.findAvgStatOnDate(returnUserSelectedDate(), "numSteps");
  stepComparison.innerText = `Your Steps: ${userStepCount} vs Users Average: ${avgStepsAll}`;
  const avgActiveMins = userActivity.findAvgStatOnDate(returnUserSelectedDate(), "minutesActive");
  minsActiveCompare.innerText = `Minutes Active: ${userMinsActive} vs Users Average: ${avgActiveMins}`;
  const avgStairsClimbed = userActivity.findAvgStatOnDate(returnUserSelectedDate(), "flightsOfStairs");
  stairsComparison.innerText = `Flights climbed: ${userFlightsClimbed} vs Users Average: ${avgStairsClimbed}`;
  const weeklySteps = Object.keys(userActivity.getUserActivityWeek(3, returnUserSelectedDate(), "numSteps"));
  const weeklyStepCount = Object.values(userActivity.getUserActivityWeek(3, returnUserSelectedDate(), "numSteps"));
  const newDateFormatSteps = weeklySteps.map(date => returnNewDateFormat(date))
  let activityChart1 = new Chart(activityChart, {
    type: 'line',
    data: {
        labels: newDateFormatSteps,
        datasets: [{
            label: 'Number of Steps',
            data: weeklyStepCount,
            backgroundColor: [
                '#a7ff03',
            ],
            borderColor: [
              '#a7ff03',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
const weeklyStairs = Object.keys(userActivity.getUserActivityWeek(3, returnUserSelectedDate(), "flightsOfStairs"));
const weeklyStairCount = Object.values(userActivity.getUserActivityWeek(3, returnUserSelectedDate(), "flightsOfStairs"));
const newDateFormatStair = weeklyStairs.map(date => returnNewDateFormat(date))
let activityChart2 = new Chart(stairsChart, {
  type: 'line',
  data: {
      labels: newDateFormatStair,
      datasets: [{
          label: 'Flights of Stairs',
          data: weeklyStairCount,
          backgroundColor: [
              '#ff3333',
          ],
          borderColor: [
              '#ff3333',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
const weeklyMinutes = Object.keys(userActivity.getUserActivityWeek(3, returnUserSelectedDate(), "minutesActive"));
const weeklyMinutesCount = Object.values(userActivity.getUserActivityWeek(3, returnUserSelectedDate(), "minutesActive"));
const newDateFormatMin = weeklyMinutes.map(date => returnNewDateFormat(date))
let activityChart3 = new Chart(minutesChart, {
  type: 'line',
  data: {
      labels: newDateFormatMin,
      datasets: [{
          label: 'Minutes Active',
          data: weeklyMinutesCount,
          backgroundColor: [
              '#f67dff',
          ],
          borderColor: [
              '#f67dff',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
}
//
function getQualitySleepersOver3(date) {
  userRepo.userData.forEach(element => {
    sleepRepo.createSleepQualityData(date, element.id)
  });
  return sleepRepo.getQualitySleepers()
};

function displayStepGoal() {
  userStep.innerText = `Your Daily Step Goal:${firstUser.dailyStepGoal}`;
  averageStep.innerText = `Users Average Step Goal: ${userInfo.calculateTotalAverageStepGoal()}`;
}

function displayHydrationData() {
  dayDrink.innerText = `Water Consumed: ${hydrationInfo.fluidOzsDrankDay(3, returnUserSelectedDate())} ounces`;
  const weeklyHydrationDays = Object.keys(hydrationInfo.fluidOzsDrankWeek(3, returnUserSelectedDate()))
  const weeklyHydrationOunces = Object.values(hydrationInfo.fluidOzsDrankWeek(3, returnUserSelectedDate()))
  const newDateFormatHydro = weeklyHydrationDays.map(date => returnNewDateFormat(date))
  let hydroChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: newDateFormatHydro,
        datasets: [{
            label: 'Number of Ounces',
            data: weeklyHydrationOunces,
            backgroundColor: [
                '#47e7ff',
                '#47e7ff',
                '#47e7ff',
                '#47e7ff',
                '#47e7ff',
                '#47e7ff',
                '#47e7ff',
            ],
            borderColor: [
              '#47e7ff',
              '#47e7ff',
              '#47e7ff',
              '#47e7ff',
              '#47e7ff',
              '#47e7ff',
              '#47e7ff',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function displaySleepData() {
  let daySleep = sleepUser1.showHoursSleptByDate(returnUserSelectedDate());
  let qualitySleepDay = sleepUser1.showSleepQualityByDate(returnUserSelectedDate())
  hoursSleptDay.innerText = `Hours slept on this date: ${daySleep}`;
  sleepQualityDay.innerText = `Quality hours slept on this date: ${qualitySleepDay}`;
  let userAvgSleepHours = sleepUser1.calcAllTimeSleepAvg('hoursSlept');
  let userAvgQualityHours = sleepUser1.calcAllTimeSleepAvg('sleepQuality');
  avgSleepHours.innerText = `Total average sleep hours: ${userAvgSleepHours}`;
  avgSleepQuality.innerText = `Total average sleep quality: ${userAvgQualityHours}`;
  const weeklySleepDays = Object.keys(sleepUser1.showHoursSleptByWeek(returnUserSelectedDate()));
  const newDateFormat = weeklySleepDays.map(date => returnNewDateFormat(date))
  const weeklySleepHours = Object.values(sleepUser1.showHoursSleptByWeek(returnUserSelectedDate()));
  const weeklyQualitySleepHours = Object.values(sleepUser1.showSleepQualityByWeek(returnUserSelectedDate()));

  let userSleepChart = new Chart(sleepChart, {
    type: 'bar',
    data: {
        labels: newDateFormat,
        datasets: [{
            label: 'Number of Hours',
            data: weeklySleepHours,
            backgroundColor: [
                '#fff04a',
                '#fff04a',
                '#fff04a',
                '#fff04a',
                '#fff04a',
                '#fff04a',
                '#fff04a',
            ],
            borderColor: [
              '#fff04a',
              '#fff04a',
              '#fff04a',
              '#fff04a',
              '#fff04a',
              '#fff04a',
              '#fff04a',
            ],
            borderWidth: 1
        },
        {
            label: 'Number of Quality Hours',
            data: weeklyQualitySleepHours,
            backgroundColor: [
                '#ffa84a',
                '#ffa84a',
                '#ffa84a',
                '#ffa84a',
                '#ffa84a',
                '#ffa84a',
                '#ffa84a',
            ],
            borderColor: [
              '#ffa84a',
              '#ffa84a',
              '#ffa84a',
              '#ffa84a',
              '#ffa84a',
              '#ffa84a',
              '#ffa84a',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function returnUserSelectedDate() {
  let selectedDate = dayjs(date.value).format('YYYY/MM/DD')
  return selectedDate
}

function returnNewDateFormat(date) {
  let selectedDate = dayjs(date).format('MM/DD')
  return selectedDate
}
