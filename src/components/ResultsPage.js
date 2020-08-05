import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import '../styles/ResultsPage.css'
import pic from '../assets/image2.png'
import ReactPlayer from 'react-player'
// import vid from '../assets/video1.mp4';

class InfoPage extends React.Component {

    render() {
    return (
        
        <div className="fullpage">
        <Grid>

        <div className="titleText">
            <Grid.Row>
                    Results
            </Grid.Row>
        </div>


        <div className="userVids">
        <Grid divided="vertically" className="mainGrid">
            <Grid.Row columns={2}>
            <Grid.Column>
                                <ReactPlayer url="http://104.154.143.76/video/video=originalVid+t=01:10" playing="true"></ReactPlayer>
            </Grid.Column>
            <Grid.Column>
                                <ReactPlayer url="http://104.154.143.76/video/video=ZIGuuXU2+t=01:10" playing="true"></ReactPlayer>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>




        <div className="bottomText" >
            <Grid.Row>
                    <p>FitHawk was inspired by its creators desire to work out smarter, not harder! 
                        Attending Wilfrid Laurier University in Waterloo, Ontario, Canada, like-minded computer science enthusiasts 
                        Ryan Ottman, Ray Zhao, Matthew Dietrich, Colin Faught, Kamran Tayyab and Arshia Mathur connected to bring their vision to life! 
                        Bringing low cost, high efficiency workout analysis to the everyday gym goer, it is our hope that FitHawk will inspire others to break through their barriers, 
                        and give them the feedback to accompany their drive as they strive to take their workouts to the next level.</p>
            </Grid.Row>
        </div>
            </Grid>
            </div>
        )
    }
}
export default InfoPage;