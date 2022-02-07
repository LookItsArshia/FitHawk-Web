
import firebase from 'firebase';


export function writeUserData(uid, query) {
  // console.log(uid)
  firebase.database().ref('users/' + uid).set({
    query
  });
}



export function readUserData(userId) {
  return (firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
    var name = (snapshot.val() && snapshot.val().query.name) || '';
    var height = (snapshot.val() && snapshot.val().query.height) || '';
    var weight = (snapshot.val() && snapshot.val().query.weight) || '';
    var age = (snapshot.val() && snapshot.val().query.age) || '';
    var email = (snapshot.val() && snapshot.val().query.email) || '';

    const info = {
      name: name,
      height: height,
      weight: weight,
      age: age,
      email:email,
    }
    return info


  }));
}

//***Function to access existing, logged in user.***
//   getUser = ()=>{
//     const user = firebase.auth().currentUser
//     console.log(user);
//     if (user){
//         readUserData(user.uid).then((info)=>{
//             console.log(info)
//             console.log(info.username);
//         });
//     }
//     else{
//         console.log("Fail")
//     }
// }

export default { writeUserData, readUserData };