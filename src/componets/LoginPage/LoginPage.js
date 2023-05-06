import React, { Component } from 'react';

import "./LoginPage.css";

import Grid from '@mui/material/Grid';
import SignUp from '../SignUp/SignUp';
import SignIN from '../SignIn/SignIN';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true
         }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else    
            this.setState({isLogin: true});
    }

    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                       <div className="loginpage__main">
                          
                           <div>
                               <div className="loginpage_rightcomponent">
                                   <img className="loginpage__logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
                                   <div className="loginPage__signin">
                                   
                                   {
                                         this.state.isLogin ? <SignIN/> : <SignUp/>
                                    }


                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">OR</div>
                                            <div className="login__dividor"></div>
                                        </div>

                                        {/* <div className="login__fb">
                                            <img src={fblogo} width="15px" style={{ "marginRight":"5px" }} />Log in with Facebook
                                        </div> */}
                                        <div className="login_forgt"> Forgot password?</div>
                                   </div>
                               </div>

                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    }
                                    
                                   
                                </div>

                               
                           </div>
                       </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default LoginPage;


