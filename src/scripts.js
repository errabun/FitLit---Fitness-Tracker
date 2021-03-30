const userInfo = new UserRepository(userData)

const greeting = document.querySelector('#greeting');

window.addEventListener('load', generateFirstUser);

function generateFirstUser() {
  const firstUser = new User(userInfo.returnUserData(3));
  greeting.innerText = firstUser.returnUserFirstName(3);

};
