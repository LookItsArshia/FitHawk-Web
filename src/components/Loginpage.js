import React from 'react';
import { Button, Grid, Image, Divider, Form, Segment, Header, Message, Checkbox } from 'semantic-ui-react'
import pic from '../Images/image2.png'
import logo from '../Images/logo.png'
import '../styles/Loginpage.css'
import '../styles/Homepage.css'
import firebase from 'firebase'
import {writeUserData, readUserData} from '../db';

class Loginpage extends React.Component {
    contructor() {
       // super()
        this.state = {
            me: firebase.auth().currentUser
        }
    }
    handleLogIn=(e)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase.auth().signInWithPopup(provider).then((result) => {
                    // var token = result.credential.accessToken;
                    var user = result.user;

                    readUserData(user.uid).then(info => {
                        this.isLoggedIn = true;
                        if (info.email === '') {
                            // console.log("User doesn't exist in db");
                            const query = {
                                name: "Click on Edit Profile",
                                height: '',
                                weight: '',
                                age: '',
                                email: user.email
                            }
                            writeUserData(user.uid, query)
                        }
                    })
                   
                }).then((e) => {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) window.location.href = '/profile';
                    })
                    console.log("path: " + firebase.auth().getRedirectResult)
                })
                    .catch(e => console.log("Login msg" + e.message));
            });
    }

    render(){
    return (

        <div >
            <div className="mainVideo">

                <Image src={pic} className="videoTag"></Image>
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
                            <Button color='blue' onClick={this.handleLogIn} fluid size='large'> Login</Button>
                        </Segment>
                    </Form>
                    <Message>
                        <a href='#'>Forgot your password?</a>
                    </Message>
                    <Divider horizontal>Or</Divider>
                    <Button color='orange' content='New to us? Sign Up' icon='add' labelPosition='left' />
                    <Button color='teal' content='Sign in with Google' icon='google' labelPosition='left' onClick={this.handleLogIn}></Button>
                </Grid.Column>
            </Grid>
        </div>
    )
    }

}

export default Loginpage;