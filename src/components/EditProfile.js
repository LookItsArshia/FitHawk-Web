import React from 'react';

import { Grid, Image, Header, Button, Embed, Divider, Form, Checkbox } from 'semantic-ui-react'
//import '../styles/EditProfile.css'


class EditProfile extends React.Component {

    render() {  
        return (  
            <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input placeholder='Age' />
            </Form.Field>
            <Form.Field>
              <label>Height</label>
              <input placeholder='Height' />
            </Form.Field>
            <Form.Field>
              <label>Weight</label>
              <input placeholder='Weight' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        );  
        }  
    
}

export default EditProfile