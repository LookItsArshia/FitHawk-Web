import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Loginpage from './components/Loginpage';
// import Testpage from './components/Testpage';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component = {Homepage}/>
          {/* <Route path="/test" component = {Testpage}/> */}
        </Switch>
      </div>
    );
  }}

export default App;
