import React, { Component } from 'react'
import Status from './Status';
import "./StatusBar.css";


class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         };
    }

    getData=()=>{
        const thisContext=this;
        fetch("http://localhost:8081/status")
                .then(response => response.json())
                .then(json => {
                    thisContext.setState({data : json});
                     

                    
                
                   
                  
                  
                })
                .catch(error =>{
      
                })
            
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div className='statusbar_container'>
                <Status uploader="true"/>
                {
                
                this.state.data.map((item)=>(
                      <Status object={item}/>
                ))
                }
               
            </div>
         );
    }
}
 
export default StatusBar;