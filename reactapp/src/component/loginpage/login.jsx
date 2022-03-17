import './login.css';
import React from 'react';


function Login() {
  return (
    <div  id="loginBox">
      <div>
          <h1>Login</h1>
            <div id="email">
              <input type="text" placeholder="Email" className="name"/>
            </div>

            <div className="second-input" id="password">  
              <input type="password" placeholder="Password" className="name"/>
            </div>

            <div className="login-button" >
              <button id="submitButton">Login</button>
            </div>
            
              <p className="link">
                <div id="signupLink">
                  <span>New user? </span><a href="#">click here</a>
                </div>    
              </p> 
        
      </div>
    </div>
  );
}
export default Login;