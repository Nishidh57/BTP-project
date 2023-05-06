import React, { Children, Component } from 'react';
import "./mainpage.css";
import { Grid } from '@mui/material';
import Leftside from './LeftsidePanel/Leftside';
import StatusBar from './StatusBar/StatusBar';
import Uploadsection from './Uploadsection/Uploadsection';
import Postcontainer from './Postcontainer/Postcontainer';
import Rightside from './Rightsidepanel/Rightside';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   letUpdate=()=>{
       this.refs.child.getData();
   }
    render() { 
        return ( 
            <div className='mainpage_container'>
                <Grid container>
                
                   <Grid item xs={3}>
                    <Leftside/>
                   </Grid>

                   <Grid item xs={6} className='middlecontainer'>
                    
                    <StatusBar/>
                    <Uploadsection update={this.letUpdate}  />
                    <Postcontainer ref="child"  />

                   </Grid>

                   <Grid item xs={3}>
                      <Rightside/>
                   </Grid>




                </Grid>
            </div>
         );
    }
}
 
export default Layout;