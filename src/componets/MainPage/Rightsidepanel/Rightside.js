import React, { Component } from 'react';
import "./Rightside.css";
import pic from "../../../images/me.jpeg";
import Imagelayout from '../LeftsidePanel/Imagelayout';

class Rightside extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         }
    }

    
    getData=()=>{

        let jsondata = [
            {
                "image": pic,
                "text": "Nishidh Rathva"
            },

            {
               
                "text": "jay Patel"
            },

            {
               
                "text": "Devang Rathva"
            },

            {
                
                "text": "Noel Parmar"
            },

            {
              
                "text": "Brijesh Rathva"
            },

            {
                
                "text": "Dhiru Ambani"
            },

            {
                
                "text": "Narendra Modi"
            },

            {
                
                "text": "Amit Shah"
            },

            {
                
                "text": "Virat Kohli"
            },
        ];
        this.setState({ data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 
            <div className='rightside_container'>

            <div className='rightside_header'>

               contacts

            </div>

            <div className='rightside_content'>
            
             
             {
              this.state.data.map( (item) => (
              <Imagelayout image={item.image} text={item.text}/>
              )
              )
             }

          

            </div>

            </div>
         );
    }
}
 
export default Rightside;