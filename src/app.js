import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers,
} from './fetch-functions.js';

export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } =
    setupPageBasics(appDiv);

  checkResponseStatus().then((statusInfoObj) => {
    renderStatus(statusDiv, statusInfoObj);
  });

  getUsers().then((users) => renderUsers(usersUl, users));

  usersUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      let userId = event.target.getAttribute('data-user-id');
      getUserPosts(userId).then((posts) => renderPosts(postsUl, posts));
    }
  });

  newUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formInfo = new FormData(newUserForm);
    /** FEEDBACK: Great job! You now have all test cases passing! */
    const newUserInfo = {
      username: formInfo.get('username'),
      email: formInfo.get('email'),
    };

    createNewUser(newUserInfo).then((newUser) => {
      renderNewUser(newUserDiv, newUser);
      newUserForm.reset();
    });
  });
}
