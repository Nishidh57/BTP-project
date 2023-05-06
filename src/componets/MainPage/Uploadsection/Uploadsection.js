import React, { Component } from 'react';
import "./Uploadsection.css";
import { Avatar, Button, Paper } from '@mui/material';
import pic from "../../../images/me.jpeg";
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";
import Dialog from '@mui/material/Dialog';
import {storage}  from "../../firebase";



class Uploadsection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            open : false,
            uploadImage: null,
            description:""
            
         }
    }

 
       handleClose=()=>{
        this.setState({open : false});
       }

       openDialog=(event)=>{
            this.setState({open : true});
            this.setState({uploadImage: URL.createObjectURL( event.target.files[0])});
            this.setState({image: event.target.files[0]});
       }

       uploadTofirebase=()=>{
        const thisContext=this;
       

    var uploadTask =  storage.ref("images").child(this.state.image.name).put(this.state.image);
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
                    "postId": Math.floor(Math.random()*100000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).user.uid,
                    // "userName": JSON.parse(localStorage.getItem("users")).userName,
                    "description":thisContext.state.description,
                    "postPath": downloadURL,
                    "timeStamp": new Date().getTime(),
                    "likeCount": 0
                }
                
          
                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                }
          
                fetch("http://localhost:8081/post",requestOptions)
                .then(response => response.json())
                .then(data => {
                    thisContext.setState({open : false});
                     console.log(data);
                     thisContext.props.update(); 
                   
                    
                   
                  
                  
                })
                .catch(error =>{
      
                })
                

            })
        }
       );
  
    }
    //    uploadTask.on(
    //             "state_changed",
    //             (snapshot) => {
    //                 const percent = Math.round(
    //                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //                 );
    //      
    //                 // update progress
    //                
    //             },
    //             (err) => console.log(err),
    //             () => {
    //                 // download url
    //                 getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //                     console.log(url);
    //                 });
    //             }
    //         ); 
    
//   }, 
//   (error) => {
//     // Handle unsuccessful uploads
//   }, 
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );

//     }

    render() { 
        return ( 
            <div>

                <Dialog className='upload_dialogbox' open={this.state.open}>
                    <div className='upload_header'>Create Post</div>
                    <input type="text" onChange={(event)=>this.state.description= event.currentTarget.value} className='upload_textbox' placeholder="What's on your mind?"/>
                    <img src={this.state.uploadImage} className='upload_preview'  />
                    <input type="button" value="post" onClick={this.uploadTofirebase} className='upload_button'/>
                    </Dialog>


                <Paper className='upload_container'>

                <div className='upload_top'>
 
                    <div>
                        <Avatar src={pic} className='upload_img' />
                    </div>

                    <div>
                        <input className='upload_box' placeholder="What's on your mind ?" type="text"/>
                        </div>
                    
                </div>

                <div className='upload_bottom'>

                  <div className='upload_tabs'>
                      <img src={live} width="35px" />
                      <div className='upload_text'>Live Video</div>
                  </div>

                  <div className='upload_tabs'>
                    <label for="file-upload" className='upload_tabs'>
                      <img src={image} width="35px" />
                      <div className='upload_text'>Image/Video</div>
                      </label>
                      <input type="file" id="file-upload" onChange={this.openDialog}/>
                  </div>

                  <div className='upload_tabs'>
                      <img src={feeling} width="35px" />
                      <div className='upload_text'>Feelings/Activity</div>
                  </div>

                </div>

                </Paper>
            </div>
         );
    }
}
 
export default Uploadsection;