import React from 'react';
import {writeUserData, readUserData} from '../db'
import firebase from 'firebase'

import { Grid, Image, Header, Button, Embed, Divider, Form, Checkbox, Modal } from 'semantic-ui-react'
//import '../styles/EditProfile.css'


class EditProfile extends React.Component {


    

    

    constructor(props) {
        super(props)

    this.state = {
        firstname: 'test',
        lastname:'',
        age: '',
        height: '',
        weight: '',
        firstnameError: false,
        lastnameError: false,
        ageError: false,
        heightError: false,
        weightError: false,
        formError: false,
        formOpen: false
    }
    this.updateUser = this.updateUser.bind(this);
    this.submitEditForm = this.submitEditForm.bind(this);
    this.successCallback = this.successCallback.bind(this);
}



updateUser(e){
    const user = firebase.auth().currentUser
    console.log(this.state.firstname)
    const query = {
        name: this.state.firstname + " " + this.state.lastname,
        height : this.state.height,
        weight: this.state.weight,
        age: this.state.age,
        email: user.email,
    }
    writeUserData(user.uid, query)
}
//***Function to access existing, logged in user.***
  getUser = ()=>{
    const user = firebase.auth().currentUser
    console.log(user);
    if (user){
        readUserData(user.uid).then((info)=>{
            console.log(info)
            console.log(info.name);
        });
    }
    else{
        console.log("Fail")
    }
}

successCallback() {
    this.setState({complete: true})
}

handleClose = () => this.setState({formOpen:false})
handleOpen = () => this.setState({formOpen: true})

submitEditForm() {

    let error = false;

    if (this.state.firstname === '') {
        this.setState({firstnameError: true})
        error = true
    } else {
        this.setState({firstnameError: false})
        error = false
    }
    if (this.state.lastname === '') {
        this.setState({lastnameError: true})
        error = true
    } else {
        this.setState({lastnameError: false})
        error = false
    }
    if (this.state.age === '') {
        this.setState({ageError: true})
        error = true
    } else {
        this.setState({ageError: false})
        error = false
    }
    if (this.state.height=== '') {
        this.setState({heightError: true})
        error = true
    } else {
        this.setState({heightError: false})
        error = false
    }
    if (this.state.weight=== '') {
        this.setState({weightError: true})
        error = true
    } else {
        this.setState({weightError: false})
        error = false
    }
    if (error) {
        this.setState({formError: true})
        return
      } else {
        this.setState({formError: false})
      }


}

    
    render() {  
        
        return (  
            
            <Form error={this.state.formError} onClose={this.handleClose}>
                        
            <Form.Field>

              <Form.Input 
              required={true} 
              onChange={(e) => this.setState({firstname: e.target.value})} 
              label="First Name"
              placeholder='First Name...' 
              error={this.state.firstnameError} />
            </Form.Field>
            <Form.Field>
            <Form.Input 
              required={true} 
              onChange={(e) => this.setState({lastname: e.target.value})} 
              label="Last Name"
              placeholder='Last Name...' 
              error={this.state.lastnameError} />
            </Form.Field>
            <Form.Field>
            <Form.Input 
              required={true} 
              onChange={(e) => this.setState({age: e.target.value})} 
              label="Age"
              placeholder='Age...' 
              error={this.state.ageError} />
            </Form.Field>
            <Form.Field>
            <Form.Input 
              required={true} 
              onChange={(e) => this.setState({height: e.target.value})} 
              label="Height"
              placeholder='Height...' 
              error={this.state.heightError} />
            </Form.Field>
            <Form.Field>
            <Form.Input 
              required={true} 
              onChange={(e) => this.setState({weight: e.target.value})} 
              label="Weight"
              placeholder='Weight...' 
              error={this.state.weightError} />
            </Form.Field>
            <Button type='submit' onClick={this.updateUser}>Save and Submit</Button>
            {/* <Button onClick={this.getUser}>TEST</Button> */}
                
            </Form>
            
        )
        }
}

export default EditProfile