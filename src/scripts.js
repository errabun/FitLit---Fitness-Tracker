const userInfo = new UserRepository(userData)

const greeting = document.querySelector('#greeting');
const friends = document.querySelectorAll()

window.addEventListener('load', generateFirstUser);

function generateFirstUser() {
  const firstUser = new User(userInfo.returnUserData(3));
  greeting.innerText = `Welcome, ${firstUser.returnUserFirstName(3)}`;

};
