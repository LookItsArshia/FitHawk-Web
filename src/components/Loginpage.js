import React from 'react';
import { Button, Grid, Image, Divider, Form, Segment, Header, Message, Checkbox } from 'semantic-ui-react'
import pic from '../Images/image2.png'
import logo from '../Images/logo.png'
import '../styles/Loginpage.css'
import '../styles/Homepage.css'
import firebase from 'firebase'
import {writeUserData, readUserData} from '../db';

class Loginpage extends React.Component {

    handleLogIn=(e)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase.auth().signInWithPopup(provider).then((result) => {
                    // var token = result.credential.accessToken;
                    var user = result.user;
                    const query = {
                        name: "",
                        height : 0,
                        weight: 0,
                        age: 0,

                    }
                    writeUserData(user.uid, query)
                })
                    .catch(e => console.log(e.message))
            })
    }


    render(){
    return (

        <div >
            <div className="mainVideo">

                <Image src={pic} className="pics"></Image>
            </div>

            <h1 className="title" > Welcome to FitHawk</h1>
            {/*<Divider horizontal>Log-in to your account</Divider>*/}
            <Divider inverted />
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>

                <Grid.Column style={{ maxWidth: 450 }}>

                    <Header size='huge' color='black' textAlign='center'>
                        <Image src={logo} /> Log-in to your account
                </Header>

                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                            <Form.Field >
                                <Checkbox label='Keep me signed in' />
                                <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button color='blue' fluid size='large'> Login</Button>
                        </Segment>
                    </Form>
                    <Message>
                        <a href='#'>Forgot your password?</a>
                    </Message>
                    <Divider horizontal>Or</Divider>
                    <Button color='orange' content='New to us? Sign Up' icon='add' labelPosition='left' />
                    <Button color='teal' content='Sign in with Google' icon='google' labelPosition='left' onClick={this.handleLogIn}></Button>
                    {/* <Button content="get User stuff" onClick = {this.getUser}></Button> */}
                </Grid.Column>
            </Grid>
        </div>
    )
    }

}

export default Loginpage;