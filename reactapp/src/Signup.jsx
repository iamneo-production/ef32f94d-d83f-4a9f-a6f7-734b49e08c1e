import './Signup.css';
import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {

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
      <div  id="signupBox">
        <form onSubmit={handleSubmit(onSubmit)}v>
            <h1>SIGNUP</h1>
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

              <div id="username">
                <input type="text" placeholder="enter the Username" id="name" className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
              </div>

              <div id="mobilenumber">
                <input type="number" placeholder="enter the Mobilenumber" id="name" className={`form-control ${errors.Mobilenumber && "invalid"}`}
                {...register("Mobilenumber", { required: "Mobile number is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid Mobilenumber no",
                },
               })}
               onKeyUp={() => {
                trigger("Mobilenumber");
              }}
              />
              {errors.Mobilenumber && (
                <small className="text-danger">{errors.Mobilenumber.message}</small>
              )}
              </div>

              <div className="first-input" id="password">  
                <input type="password" placeholder="enter the Password" id="name"/>
              </div>

              <div className="second-input" id="password">  
                <input type="password" placeholder="enter the Confirm Password" id="name"/>
              </div>

              <div className="login-button" >
                <button id="submitButton">Signup</button>
              </div>
              
                <p className="link">
                  <div id="signinLink">
                    <span> Already having an Account? <button1> <a href="./Login">Login</a></button1></span>
                  </div>    
                </p> 
          
        </form>
      </div>
  );
}
export default Register;
