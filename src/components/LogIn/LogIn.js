import React, { useContext, useState } from "react";
import "./LogIn.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import googlePic from '../../Icon/Group 573.png'

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
 

  const [user,setUser] = useState({
    signedIn : false,
    email: '',
    displayName:''
  });

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let {from } = location.state || {from: {pathname: "/"}};

  var provider = new firebase.auth.GoogleAuthProvider();
  
  const handleGoogleLogin = () => {

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;
        var user = result.user;
        // console.log(user);
        const signedInUser = { signedIn: true,email:user.email,displayName:user.displayName}
        setUser(signedInUser);
        setLoggedInUser(signedInUser)
        alert('successfully logged in')
        if(user){
          history.replace(from);
        }
     
      })
      .catch((error) => {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
        var email = error.email;
        
        var credential = error.credential;
    
      });
  };

  return (
    <div className=" first-div">
      <div className="log"> 
      <h3>   Log In with: </h3> 
      </div>
      
      <div className="google p-5 ">
        
      
        <button style={{width:"100%"}} className="btn btn-light d-flex justify-content-between" onClick={handleGoogleLogin}>
          {" "}
       <div> <img style={{height:'30px'}} src={googlePic} alt="Google"/>  </div>
       
        
        <div> Continue with Google  </div> 
        <div> </div>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
