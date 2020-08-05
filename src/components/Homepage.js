import React from 'react';
import { Grid, Image, Header, Button, Embed } from 'semantic-ui-react'
import '../styles/Homepage.css'
import backdrop from '../assets/backdrop.png'
import pic1 from '../assets/lacingUp.png'
import pic2 from '../assets/workoutLady.png'
import pic3 from '../assets/skeletonDemo.png'


class Homepage extends React.Component {

    render() {

        const handleLogIn = () => {
            window.location.href = '/login';
        };
        return (

            <div className="center">
                <div className="mainVideo">
                    <Image src={backdrop} className="videoTag"></Image>
                </div>
                <h1 className="title" > FitHawk</h1>
                <div className="centerGrid">
                    <Grid divided="vertically" className="mainGrid">
                        <Grid.Row>
                            <Grid.Column width = {2}/>
                                <Grid.Column width = {12}>
                                    <p>Welcome to FitHawk! Our goal is to help you work out smarter, not harder! 
                                        FitHawk is a revolutionary workout companion website, helping you improve your exercise form by identifying shortcomings 
                                        in your form that hold you back and slingshotting you forward to break barriers in your personal development. 
                                        With FitHawk’s online portal, users can create a personal profile where they can record their fitness information and keep track of their feedback and results. 
                                        Allow us to explain how...</p>
                                </Grid.Column>
                            <Grid.Column width = {2} />
                        </Grid.Row>
                        <Grid.Row style={{'padding-top': '10px'}}>
                            <Grid.Column width={1}/>
                            <Grid.Column width={5}>
                                <Image src={pic1} className="videoTag"></Image>
                            </Grid.Column>
                            <Grid.Column width={7} style={{'padding-top': '7%'}}>
                                <p>Step 1: The first step on your FitHawk journey is finding a place to workout! 
                                    Not feeling the gym today? Perhaps a workout in the park, the backyard, 
                                    Fithawk can help you improve your form anywhere! Our revolutionary tracking software has no bias, 
                                    no don’t worry about getting a fancy gym membership… 
                                    All you need to bring is a video-recording device to capture your workout for our cutting edge analysis to take place.</p>
                            </Grid.Column>
                            <Grid.Column width={3}/>
                        </Grid.Row>

                        <Grid.Row style={{textAlign:'right'}}>
                        <Grid.Column width={3}/>
                            <Grid.Column width={7} style={{'padding-top': '5%'}}>
                            <p>Step 2: Work out! But before you do, make sure that camera is set up to capture yourself clearly. 
                                This means finding an angle with good lighting, and a good view of your entire body as you work out! 
                                The better the quality, the more accurate the analysis, leading to the best possible review of your efforts. 
                                Take a couple minutes to ensure you’re ready to go, and then workout as you normally would!  
                                Once the workout is complete, and the video’s are captured, you’re ready to move onto the next step!</p>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Image src={pic2} className="videoTag"></Image>
                            </Grid.Column>
                            <Grid.Column width={1}/>
                           
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}/>
                            <Grid.Column width={5}>
                                <Image src={pic3} className="videoTag"></Image>

                            </Grid.Column>
                            <Grid.Column width={7} style={{'padding-top': '8%'}}>
                            <p>Step 3: Watch the magic! Upload your videos to see FitHawk’s incredible form review. Simply drag and drop your hard work into the upload page, identify the timeframe in the video you’d like to analyze, and hit submit. It’s just that easy! Our server will analyze your video frame by frame and generate a comparison to a professionally performed movement of the same exercise by a trained professional. Once the video is ready, you’ll have the results accessible at any time with automatic feedback on where you can improve to climb to the next level… The best part? There’s no limit! Record your workouts and receive feedback as often as you need.</p>
                            </Grid.Column>
                            <Grid.Column width={3}/>
                        </Grid.Row>
                    </Grid>
                    <Button className="bigButton" style={{width: "15%"}} color='teal' content='Sign in with Google' icon='google' labelPosition='left' onClick={handleLogIn}></Button>
                </div>
                
            </div>
        )
    }

}

export default Homepage;

