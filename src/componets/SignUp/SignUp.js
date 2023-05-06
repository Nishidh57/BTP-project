import React, { Component } from 'react';

import "./SignUp.css";


import {auth}  from "../firebase";



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          emailId : null,
          name: null,
          userName: null,
          password: null
         }
    }

    // newSignUp=()=>{
    //   const auth = getAuth();
    //   createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       console.log(userCredential)
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // ..
    //     });
    // }

    newAccount = ()=>{
      
     
      auth
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((user) => {

        // console.log("userid->>>",user?.user?.email)
          // it successfully created a new user with email and password
          if (user) {
            // console.log("userid->>>",user?.user?.uid)
            let payload = {
              "userId": user?.user?.uid,
                "userName": this.state.userName,
                "name": this.state.name,
                "profileImage": ""
          }
    
          const requestOptions ={
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body : JSON.stringify(payload),
          }
    
          fetch("http://localhost:8081/users",requestOptions)
          .then(response => response.json())
          .then(data => {
              localStorage.setItem("users",JSON.stringify(data));
              window.location.reload();
          })
          .catch(error =>{

          })
            
        }
      })
      .catch(error => alert(error.message))
    }
    render() { 
        return ( 
            <div>

                <input className="logipage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Email address or phone number" />
                <input className="logipage__text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} type="text" placeholder="name" />
                <input className="logipage__text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} type="text" placeholder="userName" />
                <input className="logipage__text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type="password" placeholder="Password" />
                <button className="login__button" onClick={this.newAccount} >Sign up</button>   

            </div>
         );
    }
}
 
export default SignUp;