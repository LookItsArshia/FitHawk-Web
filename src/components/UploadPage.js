import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import {Form, Button, Grid } from 'semantic-ui-react'
import "../styles/UploadPage.css"
import placeholderPic from '../assets/VidPlaceholder.jpg'
import axios from 'axios'
class UploadPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            url : "http://104.154.143.76/video/upload"
        }
    }
    
    fileInputRef = React.createRef();
    onChangeHandler = event => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post(this.state.url, data, ).then(res => {
            window.location.href = '/profile';
        })
    }


    // fileUpload = file => {
        
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     const config = {
    //         headers: {
    //             "file": "multipart/form-data"
    //         }
    //     }
    // }
    // onFileUpload = e => {
    //     e.preventDefault();
    //     this.fileUpload(this.state.file).then(response => {
    //         console.log(response.data);
    //     })
    // };
    
  
    render() {
        const { file } = this.state;
        return (
            <div className="GridControl">
                <Grid textAlign="center">
                    <Grid.Row>
                        Upload New Video
                    </Grid.Row>
                    <Grid.Row>
                        <img src={placeholderPic} alt="Logo" height="540px" width="960px" />
                    </Grid.Row>
                    <Grid.Row>
                        <Form onSubmit={this.onFileUpload}>
                            <div className="AniButton">
                                 <input animated='fade' type="file" accept=".mp4" name="file" onChange={this.onChangeHandler} /> 
                                <Button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</Button>
                                
                            </div>
                        </Form>
                    </Grid.Row>
                </Grid>
            </div>
        )

    }
//     <Button animated='fade' size="large" color="blue" content="Choose File"
//     labelPosition="left"
//     icon="file"
//     onClick={() => this.fileInputRef.current.click()}>
//     <Button.Content visible>Analyze New Video?</Button.Content>
//     <Button.Content hidden>Select Video to Upload...</Button.Content>
// </Button>

}

export default UploadPage;