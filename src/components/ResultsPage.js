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
                                <ReactPlayer url="http://104.154.143.76/video/video=originalVid+t=01:10" playing="true"></ReactPlayer>
            </Grid.Column>
            </Grid.Row>

        </Grid>
        </div>




        <div className="bottomText">
            <Grid.Row>
                    <p>Paragraph explaining app:
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </p>
            </Grid.Row>
        </div>

        <div className="bigButton">
            <Button style={{padding: '15px 32px'}}>Back to Profile</Button>
        </div>



        </Grid>
        </div>

        )
    }
}
export default InfoPage;