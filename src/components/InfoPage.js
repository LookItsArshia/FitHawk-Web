import React, { useState, useEffect } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../styles/InfoPage.css'
import pic from '../assets/image2.png'
// import vid from '../assets/video1.mp4';

function App() {
    const [currentTime, setCurrentTime] = useState(0);
  
    useEffect(() => {
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
      });
    }, []);
  
    return (
      <div className="App">
          <p>The current time is {currentTime}.</p>
      </div>
    );
  }


class InfoPage extends React.Component {

    render() {
    return (
        
        <Grid>

        <div className="demoPics">
        <Grid divided="vertically" className="mainGrid">
            <Grid.Row columns={3}>
            <Grid.Column>
                    <Image src={pic} className="pics"></Image>
            </Grid.Column>
            <Grid.Column>
                <Image src={pic} className="pics"></Image>
            </Grid.Column>
            <Grid.Column>
                <Image src={pic} className="pics"></Image>
            </Grid.Column>
            </Grid.Row>

        </Grid>
        </div>


        <div className="titleText">
            <Grid.Row>
                    How it works
            </Grid.Row>
        </div>

        <div className="bottomText">
            <Grid.Row>
                    <p>Paragraph explaining app:
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla</p>
            </Grid.Row>
        </div>

        <Grid>
            <App/>

        </Grid>

        </Grid>



        )
    }
}
export default InfoPage;