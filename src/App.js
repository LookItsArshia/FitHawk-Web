import React from 'react';
import './App.css';
//import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import ResultsPage from './components/ResultsPage';
// import Testpage from './components/Testpage';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ResultsPage}/>
          {/* <Route path="/test" component = {Testpage}/> */}
        </Switch>
      </div>
    );
  }}

export default App;
