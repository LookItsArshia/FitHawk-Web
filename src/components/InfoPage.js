import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../styles/InfoPage.css'
import pic from '../assets/image2.png'
// import vid from '../assets/video1.mp4';

class InfoPage extends React.Component {

    render() {
    return (
        <Grid>
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
        )
    }
}
export default InfoPage;