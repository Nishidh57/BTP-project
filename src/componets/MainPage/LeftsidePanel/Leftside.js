import React, { Component } from 'react';
import "./Leftside.css";
import Imagelayout from './Imagelayout';
import pic from "../../../images/me.jpeg";
import covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messanger from "../../../images/messengerkids.png";
import AdCentre from "../../../images/ads.png";
import Admanager from "../../../images/admanager.png";
import Blood from "../../../images/blood.png";
import Bussiness from "../../../images/business.png";


class Leftside extends React.Component {
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
                "image": covid,
                "text": "Covid Information Centre"
            },

            {
                "image": groups,
                "text": "Friends"
            },

            {
                "image": memories,
                "text": "Memories"
            },

            {
                "image": messanger,
                "text": "Messanger Kids"
            },

            {
                "image": AdCentre,
                "text": "Ad Centre"
            },

            {
                "image": Admanager,
                "text": "Ads Manager"
            },

            {
                "image":  Blood,
                "text": "Blood Donations"
            },

            {
                "image": Bussiness,
                "text": "Business Manager"
            },
        ];
        this.setState({ data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 

           <div>
             
              {
               this.state.data.map( (item) => (
                <Imagelayout image={item.image} text={item.text}/>
               )
               )
              }

           </div>

         );
    }
}
 
export default Leftside;