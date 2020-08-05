import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../styles/InfoPage.css'
import CreatorPhoto from '../assets/GroupPic.png'

class InfoPage extends React.Component {

    render() {
    return (
        <Grid>
        <div className="demoPics">
        <Grid divided="vertically" className="mainGrid">
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Image src={CreatorPhoto} className="videoTag"></Image>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>

        <div className="titleText">
            <Grid.Row>
                    About The Creators
            </Grid.Row>
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
        )
    }
}
export default InfoPage;