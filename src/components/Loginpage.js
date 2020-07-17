import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react'
import pic from '../Images/image2.png'
import '../styles/Loginpage.css'
import '../styles/Homepage.css'

class Loginpage extends React.Component {


    render(){
        return(
        
            <div className="center">
                <div className="mainVideo">
            
                <Image src={pic} className="pics"></Image>
            </div>
            </div>
            

        )
    }

}

export default Loginpage;
