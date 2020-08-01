import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import InfoPage from './components/InfoPage';
import Navbar from './components/Navbar';
import Loginpage from './components/Loginpage';
// import Testpage from './components/Testpage';
import { Switch, Route } from 'react-router-dom';
import Firebase from 'firebase';
import firebaseConfig from './firebaseConfig'

import { FirebaseDatabaseProvider } from "@react-firebase/database";

// const config = {
//   apiKey: "AIzaSyCIDMVcSEQgQICEP3UqcBsG7Wwy7rX6aP4",
//   authDomain: "fithawk-5e179.firebaseapp.com",
//   databaseURL: "https://fithawk-5e179.firebaseio.com/",
//   storageBucket: "bucket.appspot.com"
// };
Firebase.initializeApp(firebaseConfig);
class App extends React.Component {
    
  
  constructor(props){
    super(props)
    
    var database = Firebase.database();
    
  }

  //  writeUserData = (userId, name, email, imageUrl) =>{
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }
  render(){
    return (
      <FirebaseDatabaseProvider>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component = {Homepage}/>
           <Route path="/login" component = {Loginpage}/>
          <Route path="/about" component = {InfoPage}/>
          {/* <Route path="/test" component = {Testpage}/> */}
        </Switch>
      </div>
      </FirebaseDatabaseProvider>
    );
  }}

export default App;