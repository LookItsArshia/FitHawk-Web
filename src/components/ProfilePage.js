import React from 'react';
import { Grid, Image, Header, Button, Embed, Divider } from 'semantic-ui-react'
import '../styles/ProfilePage.css'
import pic from '../assets/mii.png'
import workoutpic from '../assets/workout.png'

class ProfilePage extends React.Component {

    render() {
        return (
        <div className= "main">
            
            <h1 className="title" > Profile </h1>

            <Image style={{'padding-left': '220px'}} src={pic} className="pics"></Image>
            
    
        <div className="centerGrid">
            <Grid columns={2} divided="horizontally" className="mainGrid">
            
            <Grid.Row style={{'padding-top': '50px'}}/>
                <Grid.Column width = {3}>
                <h2 style={{'padding-left': '250px'}} className="label" > Name</h2>
                <h2 style={{'padding-left': '250px'}} className="label" > Age</h2>
                <h2 style={{'padding-left': '250px'}} className="label" > Height</h2>
                <h2 style={{'padding-left': '250px'}} className="label" > Weight</h2>
                </Grid.Column>
                <Grid.Column width = {2}>
                <h2 style={{'padding-left': '50px'}} className="info" > John Smith</h2>
                <h2 style={{'padding-left': '50px'}} className="info" > 30</h2>
                <h2 style={{'padding-left': '50px'}} className="info" > 6'0</h2>
                <h2 style={{'padding-left': '50px'}} className="info" > 175lbs</h2>
                </Grid.Column>
               
                <Grid.Row style={{'padding-top': '10px'}}/>
                <Grid.Row style={{'padding-left': '340px'}}>
                <button className="editButton">Edit Profile</button>
                </Grid.Row>
                <Grid.Column>
                <h1 style={{'padding-left': '70px'}} className="videos" > My Videos </h1>
                <Grid.Row style={{'padding-top': '10px'}}/>
                <Image style={{'padding-left': '300px'}} src={workoutpic} className="workoutpics"></Image>
                <Grid.Row style={{'padding-top': '20px'}}/>
                <Image style={{'padding-left': '300px'}} src={workoutpic} className="workoutpics"></Image>
                <Grid.Row style={{'padding-top': '20px'}}/>
                <Image style={{'padding-left': '300px'}} src={workoutpic} className="workoutpics"></Image>
                <Grid.Row style={{'padding-top': '10px'}}/>
                <Grid.Row style={{'padding-left': '450px'}}>
                <button className="uploadButton">Upload New Video</button>
                </Grid.Row>
                </Grid.Column>
                

                

                
                
           
                
            </Grid>
        </div>
        </div>
                

        
        
        )
    }
}

    export default ProfilePage