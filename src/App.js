import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import InfoPage from './components/InfoPage';
import Navbar from './components/Navbar';
// import Testpage from './components/Testpage';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component = {Homepage}/>
          <Route path="/about" component = {InfoPage}/>
          {/* <Route path="/test" component = {Testpage}/> */}
        </Switch>
      </div>
    );
  }}

export default App;
