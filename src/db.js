

function writeUserData(userId, name) {
    firebase.database().ref('users/' + userId).set({
      username: name,
    });
  }

  export default writeUserData