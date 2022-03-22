import React, {Component} from 'react';
import './App.css';
import Login from'./Login';
import Signup from './Signup';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;