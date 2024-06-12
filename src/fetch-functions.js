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

export const getUsers = () => {};

export const getUserPosts = () => {};

export const createNewUser = () => {};
