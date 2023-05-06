import React, { Component } from 'react';

import "../LoginPage/LoginPage.css";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth}  from "../firebase";



class SignIN extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            password: null
         }
    }

    
    // login=()=>{
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
    //       .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //       });
       
    //     }

        login = ()=>{
      
     
            auth
            .signInWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((user) => {
                // it successfully created a new user with email and password
                if (user) {
                  
                    
                    fetch("http://localhost:8081/users/"+user.uid)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("users",JSON.stringify(data));
                        window.location.reload();
                    })
                    .catch(error =>{
          
                    })
                    localStorage.setItem("users",JSON.stringify(user));
                    window.location.reload();

                  

              }
              
            })
            .catch(error => alert(error.message))
          }


    render() { 
        return ( 
            <div>

             <input className="logipage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value}} type="text" placeholder="Email addrss or phone number" />
             <input className="logipage__text" onChange={(event)=>{this.state.password=event.currentTarget.value}}  type="password" placeholder="Password" />
             <button className="login__button" onClick={this.login}>Log In</button>

            </div>
         );
    }
}
 
export default SignIN;