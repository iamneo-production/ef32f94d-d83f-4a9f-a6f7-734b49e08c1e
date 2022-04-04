import './Login.css';
import React from 'react';
import { useForm } from "react-hook-form";

const Login =() => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div  id="loginBox">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="disflex">
          <h1>Login</h1> 
           <p className="link">
                <div id="homeLink">
                  <span></span><br></br><button1> <a href="./Home">Home</a></button1>
                </div>    
              </p>
          </div>
            <div id="email">
              
              <input type="email" placeholder="Enter the email" id="name" className={`form-control ${errors.email && "invalid"}`} 
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}/>

                {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
                      
            <div className="second-input" id="password">  
              <input type="password" placeholder="Enter the password" id="name" />
              
            </div>

            <div className="login-button" >
              <button id="submitButton">Login</button>
            </div>
            
              <p className="link">
                <div id="signupLink">
                  <span>New user? </span><br></br><button1> <a href="./Signup">SignUp</a></button1>
                </div>    
              </p> 
       
      </form>
    </div>
  );
}
export default Login;