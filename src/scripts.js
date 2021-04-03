const userInfo = new UserRepository(userData)
let firstUser = new User(userInfo.returnUserData(3));

const userSleepData = new SleepRepository(sleepData);
let sleepUser1 = new Sleep(userInfo.returnUserData(3), userSleepData);

const greeting = document.querySelector('#greeting');
const friends = document.querySelectorAll('.friend');
const userStep = document.querySelector('#userStepGoal');
const averageStep = document.querySelector('#averageStepGoal');
const chart = document.getElementById('myChart');

const date = document.querySelector('#date');
const dayDrink = document.querySelector('#dayDrink');

window.addEventListener('load', generateFirstUser);
date.addEventListener('input', displayHydrationData)

function generateFirstUser() {
  // const firstUser = new User(userInfo.returnUserData(3));
  greeting.innerText = `Welcome, ${firstUser.returnUserFirstName(3)}`;
  displayFriends();
  displayStepGoal();
  displayHydrationData();
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

function getQualitySleepersOver3(date) {
  userRepo.userData.forEach(element => {
    sleepRepo.createSleepQualityData(date, element.id)
  });
  return sleepRepo.getQualitySleepers()
};

function displayStepGoal() {
  userStep.innerText = `Your Daily Step Goal: ${firstUser.dailyStepGoal}`;
  averageStep.innerText = `Average Step Goal for all Users: ${userInfo.calculateTotalAverageStepGoal()}`;
}

function displayHydrationData() {
  let hydrationInfo = new HydrationRepository(hydrationData);
  dayDrink.innerText = `Water Consumed Today: ${hydrationInfo.fluidOzsDrankDay(3, returnUserSelectedDate())} ounces`;
  const weeklyHydrationDays = Object.keys(hydrationInfo.fluidOzsDrankWeek(3, returnUserSelectedDate()))
  const weeklyHydrationOunces = Object.values(hydrationInfo.fluidOzsDrankWeek(3, returnUserSelectedDate()))
  let barChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: weeklyHydrationDays,
        datasets: [{
            label: 'Number of Ounces',
            data: weeklyHydrationOunces,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
  let test = dayjs(date.value).format('YYYY/MM/DD')
  return test
}
