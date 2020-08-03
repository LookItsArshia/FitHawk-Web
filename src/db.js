
import firebase from 'firebase';


export function writeUserData(userId, query) {
    firebase.database().ref('users/' + userId).set({
      userId:userId,
      query
    });
  }



  export function readUserData(userId){
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      var height = (snapshot.val()&& snapshot.val().height) || 0;
      
      // ...
    });
  }



  // module.exports(writeUserData, readUserData);
  export default {writeUserData,readUserData};