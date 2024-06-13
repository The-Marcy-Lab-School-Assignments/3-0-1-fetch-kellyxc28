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

  checkResponseStatus()
    .then((statusInfoObj) => {
      renderStatus(statusDiv, statusInfoObj);
    })
    .then(() => getUsers())
    .then((users) => renderUsers(usersUl, users));
}
