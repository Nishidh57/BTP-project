import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import "../mainpage.css";


class Imagelayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className='imagelayout_container'>
                <div className='imagelayout_imglay'>
                    <Avatar className='imagelayout_img' src={this.props.image} />
                </div>

                <div className='imagelayout_text'>
                    {this.props.text}
                </div>
            </div>
         );
    }
}
 
export default Imagelayout;