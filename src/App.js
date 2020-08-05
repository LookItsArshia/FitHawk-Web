import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage'
import Homepage from './components/Homepage'
import InfoPage from './components/InfoPage';
import Navbar from './components/Navbar';
import Loginpage from './components/Loginpage';
import EditProfile from './components/EditProfile';
import ResultsPage from './components/ResultsPage';
// import Testpage from './components/Testpage';
import { Switch, Route } from 'react-router-dom';
import Firebase from 'firebase';
import firebaseConfig from './firebaseConfig'
import Authenticate from './components/Authenticate';

import { FirebaseDatabaseProvider } from "@react-firebase/database";

Firebase.initializeApp(firebaseConfig);

class App extends React.Component {


  // var database = Firebase.database();
  
  render(){
  return (
      <FirebaseDatabaseProvider>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Loginpage} />
            {/* <Route path="/profile" component= {ProfilePage}/> */}
            <Route path="/edit" component= {EditProfile}/>

             <Route path="/about" component={InfoPage} />
            <Authenticate path="/profile" component={ProfilePage}></Authenticate>
          <Route path="/results" component={ResultsPage}></Route>

            {/* <Route path="/test" component = {Testpage}/> */}

          </Switch>
        </div>
      </FirebaseDatabaseProvider>
  );
  }
}

export default App;