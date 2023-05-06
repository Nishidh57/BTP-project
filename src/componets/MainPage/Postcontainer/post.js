import React, { Component } from 'react';
import "./Postcontainer.css";
import { Avatar, Paper } from '@mui/material';
import pic from "../../../images/me.jpeg";
import post from "../../../images/post.jpeg";
import like from "../../../images/like.png";
import likebutton from "../../../images/likebutton.png";
import comment from "../../../images/comment.png";
import share from "../../../images/share.png";


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

     isImageAvailable=(data)=>{
        return data=""?false:true;
     }
     
    render() { 
        return ( 
            <div>

              <Paper className='post_container'>

                {/*header*/}
                <div className='post_header'>

                  <div className='post_header_img'>
                    <Avatar src={pic} className='post_pic'/>
                  </div>

                  <div className='post_header_text'>
                        {this.props.object.user_name}
                  </div>

                </div>

                {/*descryption*/}
                <div className='post_descryption'>
                {this.props.object.description}
                </div>

                {/* image */}
                <div className='post_image'>

                    {
                        this.isImageAvailable() ? <img src={this.props.object.postPath} width="600px" /> : <span></span> 
                    }

                    
                </div>

                {/* like count */}
                <div className='post_likecountcontainer'>

                   <div className='post_like'>
                       <img className='post_img' src={like} />
                   </div>

                   <div className='post_likecount'>
                   {this.props.object.like}
                   </div>

                </div>

                {/*like share box*/}
                <div className='post_likeshare'>
                    <div className='post_tab'>

                       <div className='post_tabfirst'>
                        <img className='post_tabimg' src={likebutton} />
                       </div>

                       <div className='post_tabtext'>
                           Like
                       </div>

                    </div>


                    <div className='post_tab'>

                       <div className='post_tabfirst'>
                        <img className='post_tabimg' src={comment} />
                       </div>

                       <div className='post_tabtext'>
                           Comment
                       </div>

                    </div>


                    <div className='post_tab'>

                       <div className='post_tabfirst'>
                        <img className='post_tabimg' src={share} />
                       </div>

                       <div className='post_tabtext'>
                           Share
                       </div>

                    </div>
                </div>

                {/* comment box */}
                <div className='upload_comment'>

                <div className='upload_top'>
 
                 <div>
                     <Avatar src={pic} className='upload_img' />
                </div>

                <div>
                  <input className='upload_box' placeholder="Write a Comment..." type="text"/>
                </div>
 
                </div>


                </div>


              </Paper>

            </div>
         );
    }
}
 
export default Post;