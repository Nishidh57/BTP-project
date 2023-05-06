import React, { Component } from 'react';

import "./HomePage.css";

import NavBar from '../NavBar/NavBar';
import Layout from '../MainPage/Layout';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <Layout/>
            </div>
         );
    }
}
 
export default HomePage;