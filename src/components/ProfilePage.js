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

            
            
    
        <div className="centerGrid">
            <Grid columns={2} divided="horizontally" className="mainGrid">
                
            <Grid.Row style={{'padding-top': '50px'}}/>
            <Grid.Row>
            <Grid.Column>
            
            <Image src={pic} className="pics"></Image>
            <Grid columns={2}>
            <Grid.Row>
                
                <Grid.Column className="rightAlignedColumn">
                <h2 className="label" > Name:</h2>
                <h2 className="label" > Age:</h2>
                <h2 className="label" > Height:</h2>
                <h2 className="label" > Weight:</h2>
                </Grid.Column>
                <Grid.Column>
                <h2 className="info" > John Smith</h2>
                <h2 className="info" > 30</h2>
                <h2 className="info" > 6'0</h2>
                <h2 className="info" > 175lbs</h2>
                </Grid.Column>
            </Grid.Row>
            </Grid>

        
            <Grid.Row style={{'padding-top': '30px'}} className="centeredColumn">
            <Button className="editButton">Edit Profile</Button>
            </Grid.Row>
            
            </Grid.Column>
            


                <Grid.Column>
                <h1 className="videos" > My Videos </h1>
                <Grid.Row style={{'padding-top': '10px'}}/>
                <Image src={workoutpic} className="workoutpics"></Image>
                <Grid.Row style={{'padding-top': '20px'}}/>
                <Image src={workoutpic} className="workoutpics"></Image>
                <Grid.Row style={{'padding-top': '20px'}}/>
                <Image src={workoutpic} className="workoutpics"></Image>
                <Grid.Row style={{'padding-top': '20px'}} className="centeredColumn">
                <Button className="uploadButton">Upload New Video</Button>
                </Grid.Row>
                </Grid.Column>
                   
                
           
                </Grid.Row>
            </Grid>
        </div>
        </div>
                

        
        
        )
    }
}

    export default ProfilePage