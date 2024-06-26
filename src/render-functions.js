export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const div = statusDiv;

  const h2 = document.createElement('h2');
  h2.setAttribute('id', 'status-heading');
  h2.textContent = `Info on - ${statusInfoObj.url}`;

  const p = document.createElement('p');
  p.setAttribute('id', 'status-code');
  if (statusInfoObj.ok) {
    p.textContent = `Status code: ${statusInfoObj.status}, OK!`;
  } else {
    p.textContent = `Status code: ${statusInfoObj.status}, FAIL!`;
  }

  div.append(h2, p);
};

export const renderUsers = (userUl, users) => {
  userUl.innerHTML = ``;

  users.forEach((user) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'user-card');
    const button = document.createElement('button');
    button.setAttribute('data-user-id', user.id);
    button.textContent = `Load ${user.username}'s posts`;
    /** FEEDBACK: Not really a big deal but typically when appending you should go from innermost element to outer not the other way around! */
    userUl.append(li);
    li.append(button);
  });
};

export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = ``;

  posts.forEach((post) => {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    h2.textContent = post.title;
    const p = document.createElement('p');
    p.setAttribute('id', post.id);
    p.textContent = post.body;

    postsUl.append(li);
    li.append(h2, p);
  });
};

export const renderNewUser = (newUserDiv, newUserInfo) => {
  newUserDiv.innerHTML = ``;

  const h2 = document.createElement('h2');
  h2.textContent = newUserInfo.username;
  const p = document.createElement('p');
  p.textContent = newUserInfo.email;

  newUserDiv.append(h2, p);
};
