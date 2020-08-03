
import firebase from 'firebase';


export function writeUserData(query) {
  console.log(query.uid)
    firebase.database().ref('users/' + query.uid).set({
      query
    });
  }



  export function readUserData(userId){
    return (firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      console.log(snapshot.val().query.username);
      var username = (snapshot.val() && snapshot.val().query.username) || 'Anonymous';
      // var height = (snapshot.val()&& snapshot.val().height) || 0;
      return username;
      
      // ...
    }));
  }



  // module.exports(writeUserData, readUserData);
  export default {writeUserData,readUserData};