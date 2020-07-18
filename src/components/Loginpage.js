import React from 'react';
import { Button, Grid, Image,Divider, Form, Segment,Header,Message,Checkbox  } from 'semantic-ui-react'
import pic from '../Images/image2.png'
import logo from '../Images/logo.png'
import '../styles/Loginpage.css'
import '../styles/Homepage.css'

class Loginpage extends React.Component {


    render(){
        return(
        
            <div >
                <div className="mainVideo">
               
                    <Image src={pic} className="pics"></Image>
                </div>
                
                <h1 className="title" > Welcome to FitHawk</h1>
                
                <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                
                <Grid.Column style={{ maxWidth: 450 }}>

                <Header as = 'h1' color='black' textAlign='center'>
                    <Image src={logo}/> Log-in to your account
                </Header>

                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
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
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
                </Grid.Column>
            </Grid>
            </div>
        )
    }

}

export default Loginpage;