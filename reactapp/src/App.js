import React, {Component} from 'react';
 import Login from'./Components/Login';
 import Signup from './Components/Signup';
 import Home from './Components/Home';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
           <Route exact path="/Home" element={<Home/>}/>
           <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/" element={<Signup/>}/> 
        </Routes>
      </Router>
    )
  }
}

export default App;