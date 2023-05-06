import { Paper } from '@mui/material';
import React, { Component } from 'react';
import "./StatusBar.css";
import uploadIcon from "../../../images/upload.png";
import {storage}  from "../../firebase";



class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    upload=(event)=>{

        let image=event.target.files[0];

        if(image == undefined || image==null)
        return;

        const thisContext=this;
        var uploadTask =  storage.ref("status").child(image.name).put(image);
           uploadTask.on(
            "state_changed",
            function(snapshot){
              
            },
            function(error){
    
            },
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                   
                    console.log(downloadURL);
    
                    let payload = {
                        "statusId": Math.floor(Math.random()*100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).user.uid,
                        // "userName": JSON.parse(localStorage.getItem("users")).userName,
                        
                        "path": downloadURL,
                        "timeStamp": new Date().getTime(),
                        
                    }
                    
              
                    const requestOptions ={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify(payload),
                    }
              
                     fetch("http://localhost:8081/status",requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                     })
                    .catch(error =>{
          
                    })
                    
    
                })
            }
           );
   }
    render() { 
        return ( 
            
            <div>
                {
                    this.props.uploader == "true" ?
                
                <Paper className='statusbar_status'> 
                   {/* <img src={uploadIcon} className='upload_icon'/>  */}

                   <label for="fileupload" className='upload_tabs'>
                   <img src={uploadIcon} className='upload_icon'/> 
                      
                      </label>
                      
                      <input type='file' id='fileupload' onChange={this.upload}/>

                   </Paper> :
                

                <Paper className='statusbar_status'>
                   <img src={this.props.object.path } className='status_image' />
                </Paper>
                

               
                }
            </div>
         );
    }
}
 
export default Status;