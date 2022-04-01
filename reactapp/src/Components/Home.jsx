import './Home.css';
import React from 'react';
import { useForm } from "react-hook-form";


const Home =() => {

  return (
    // <div>
    //   <h1>Home</h1>
    // </div>
    <div>
    
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#medcare">Medcare</a>
  <a href="#cart">Cart</a>
  <a href="#myorder">Myorder</a>
  <div class="topnav-right">
    <a href="#logout">Logout</a>
  </div>
</div>
<div class="homeScreen">
<h1> WELCOME HOME</h1>
</div>
</div>
  );
}
export default Home;