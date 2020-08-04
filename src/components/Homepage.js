import React from 'react';
import { Grid, Image, Header, Button, Embed } from 'semantic-ui-react'
import '../styles/Homepage.css'
import backdrop from '../assets/backdrop.png'
import pic1 from '../assets/lacingUp.png'
import pic2 from '../assets/workoutLady.png'
import pic3 from '../assets/skeletonDemo.png'


class Homepage extends React.Component {

    render() {
        return (

            <div className="center">
                <div className="mainVideo">
                    {/* <video className="videoTag" autoPlay loop muted style={{
                        aspectRatio: 1,
                        width: "100%",
                    }}>
                        <source src={vid} type = 'video/mp4'/>
                    </video> */}
                    <Image src={backdrop} className="pics"></Image>
                </div>
                <h1 className="title" > FitHawk</h1>
                <div className="centerGrid">
                    <Grid divided="vertically" className="mainGrid">
                        <Grid.Row>
                            <Grid.Column width = {2}/>
                            <Grid.Column width = {12}>
                                All about FitHawk
                                <p>Paragraph explaining app:
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla</p>
                            </Grid.Column>
                            <Grid.Column width = {2} />
                        </Grid.Row>
                        <Grid.Row style={{'padding-top': '20px'}}>
                            <Grid.Column width={1}/>
                            <Grid.Column width={5}>
                                <Image src={pic1} className="pics"></Image>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <p>Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                            </Grid.Column>
                            <Grid.Column width={3}/>
                        </Grid.Row>

                        <Grid.Row style={{textAlign:'right'}}>
                        <Grid.Column width={3}/>
                            <Grid.Column width={7}>
                            <p>Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Image src={pic2} className="pics"></Image>
                            </Grid.Column>
                            <Grid.Column width={1}/>
                           
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}/>
                            <Grid.Column width={5}>
                                <Image src={pic3} className="pics"></Image>

                            </Grid.Column>
                            <Grid.Column width={7}>
                            <p>Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                                    purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                            </Grid.Column>
                            <Grid.Column width={3}/>
                        </Grid.Row>
                    </Grid>
                </div>

                <div className="bigButton"><Button style={{padding: '15px 32px'}}>CREATE ACCOUNT</Button>
                <p>Or Sign in Here!</p></div>
                
            </div>








        )
    }





}

export default Homepage;

