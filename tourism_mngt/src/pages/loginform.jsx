 import React, { useState } from "react";
 import "./loginform.css"
 import { Link } from "react-router-dom";

 const Login = () => {

  const [popupStyle,showPopup]=useState("hide")
  const popup=()=>{
    showPopup("login-popup")
    setTimeout(()=> showPopup("hide"),3000)
  }
    return(
        <div className="cover" >
          <h1 style={{marginTop:'-150px'}}>Log-In </h1> 
          <br/>
          <br/>
          <input type="text" placeholder="username" />
          <br/>
          <input type="password" placeholder="password" />
         
          <div className="login-btn" onClick={popup}>Login</div>  
          <button >Cancel</button>
          <br/>
          <div className="register">Don't have an account yet?  
          <Link to="/Register" p>
          <a >
          Register here </a>
          </Link>
          
          </div>
          
        

          <p className="text">Or login using</p>

          <div className="alt-login">
            <div className="facebook">Facebook</div>
            &nbsp
            <div className="google" >Google</div>  
          </div> 

          <div className={popupStyle}>
            <h3>login failed</h3>
            <p>Username or password incorrect</p>
          </div>

        </div>
    )
 }
 export default Login