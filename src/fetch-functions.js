const userUrl = 'https://jsonplaceholder.typicode.com/users';

export const checkResponseStatus = () => {
  return fetch(userUrl).then((response) => {
    return {
      status: response.status,
      ok: response.ok,
      url: response.url,
    };
  });
};

export const getUsers = () => {
  return fetch(userUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.slice(0, 3);
    });
};

export const createNewUser = () => {};
