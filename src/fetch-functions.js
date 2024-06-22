const userUrl = 'https://jsonplaceholder.typicode.com/users';
/** FEEDBACK: Great job! Ensure to get into the habit of building out a catch block for any fetch call! */
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
      return data.slice(0, maxNumPosts);
    });
};

export const createNewUser = (newUserData = { username, email }) => {
  const postOption = {
    method: 'POST', // The type of HTTP request
    body: JSON.stringify(newUserData), // The data to be sent to the API
  };

  return fetch(userUrl, postOption)
    .then((response) => {
      if (!response.ok) {
        return console.log(
          `Fetch failed. ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((responseData) => {
      // A POST request will return the object created with an id and a createdAt timestamp
      console.log('Here is your data:', responseData);
      return responseData;
    })
    .catch((error) => {
      console.log('Error caught!');
      console.error(error.message);
    });
};
