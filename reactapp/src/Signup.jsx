import './Signup.css';
import React from 'react';

function Register() {

  return (
    <body>
      <div  id="signupBox">
        <div>
            <h1>SIGNUP</h1>
              <div id="email">
                <input type="text" placeholder="Email" className="name"/>
              </div>

              <div id="username">
                <input type="text" placeholder="Username" className="name"/>
              </div>

              <div id="mobilenumber">
                <input type="number" placeholder="Mobilenumber" className="name"/>
              </div>

              <div className="first-input" id="password">  
                <input type="password" placeholder="Password" className="name"/>
              </div>

              <div className="second-input" id="password">  
                <input type="password" placeholder="Confirm Password" className="name"/>
              </div>

              <div className="login-button" >
                <button id="submitButton">Signup</button>
              </div>
              
                <p className="link">
                  <div id="signinLink">
                    <p> Already having an Account? <button1> <a href="./Login">Login</a></button1></p>
                  </div>    
                </p> 
          
        </div>
      </div>
    </body>
  );
}
export default Register;
