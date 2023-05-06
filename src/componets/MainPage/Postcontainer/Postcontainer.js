import React, { Component } from 'react';
import "./Postcontainer.css";
import Post from './post';




class Postcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    getData=()=>{ //calling the rest from our backend
        // let json=[
        //     {
        //         "post_ID": " 1 ",
        //         "user_id": "12345678",
        //         "user_img": "URL...",
        //         "user_name": "Nishidh Rathva",
        //         "descryption": "Love this wallpaper...",
        //         "post_img": postimg,
        //         "like": "25"
        //     },

        //     {
        //         "post_ID": " 2 ",
        //         "user_id": "12345678",
        //         "user_img": "",
        //         "user_name": "Zoro",
        //         "descryption": "Dummy caption",
        //         "post_img":"",
        //         "like": "1125"
        //     },

        //     {
        //         "post_ID": " 3 ",
        //         "user_id": "12345678",
        //         "user_img": "URL...",
        //         "user_name": "Luffy",
        //         "descryption": "Love this wallpaper...",
        //         "post_img": "URL...",
        //         "like": "25"
        //     },

        //     {
        //         "post_ID": " 4 ",
        //         "user_id": "12345678",
        //         "user_img": "URL...",
        //         "user_name": "Sanji",
        //         "descryption": "Love this wallpaper...",
        //         "post_img": "Url",
        //         "like": "25"
        //     },
        // ]
        
        // this.setState({data : json});

        const thisContext=this;
        fetch("http://localhost:8081/post")
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
            <div>
                {
                    this.state.data.map((item)=>(
                         <Post object={item}/>
                    ))
                        
                    }
                
                 
        

            </div>
         );
    }
}
 
export default Postcontainer;