import React from 'react';
import {Button, Grid} from 'semantic-ui-react'
import "../styles/UploadPage.css"
import placeholderPic from '../assets/VidPlaceholder.jpg'

class UploadPage extends React.Component {

    render(){
        return(
            <div className="GridControl">
                <Grid textAlign="center">
                    <Grid.Row>
                        Upload New Video
                    </Grid.Row>
                    <Grid.Row>
                        <img src= {placeholderPic} alt="Logo" height="540px" width="960px"/>
                    </Grid.Row>
                    <Grid.Row>
                        <div className="AniButton">
                            <Button animated='fade' size="large" color="blue">
                            <Button.Content visible>Analyze New Video?</Button.Content>
                            <Button.Content hidden>Select Video to Upload...</Button.Content>
                            </Button>
                        </div>
                    </Grid.Row>
                </Grid>
            </div>
        )

    }
}

export default UploadPage;