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
                    <Image src={CreatorPhoto} className="pics"></Image>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>

        <div className="titleText">
            <Grid.Row>
                    About The Creators
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
        </Grid>
        )
    }
}
export default InfoPage;