import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import firebase from 'firebase';


class Navbar extends React.Component{
    constructor(props){
        super();
        this.state = {login: firebase.auth().currentUser ? "Logout" : "Login"};
    }
    handleItemClick = (e,{name})=> this.setState({activeItem:name});
    handleLogout = (e)=>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("shit worked")
            window.location.href= '/';
          }).catch(function(error) {
            // An error happened.
            console.log("Shit failed");
          });
    }

    render(){
        const {activeItem} = this.state;

        
        return(
            <div className ="navStyle">
                
                <Menu secondary >
                    <Menu.Item header style = {{"font-size":"20px"}}>FitHawk</Menu.Item>
                    <Menu.Item
                    as={Link} to =''
                    position = "right" 
                    name='home'
                    active={activeItem==='home'}
                    onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>

                    <Menu.Item 
                    as={Link} to ='about'
                    name='about'
                    active={activeItem==='about'}
                    onClick={this.handleItemClick}>
                        About
                    </Menu.Item>

                    <Menu.Item 
                    as={Link} to ='profile'
                    name='profile'
                    active={activeItem==='profile'}
                    onClick= {this.handleItemClick}>
                        Profile
                    </Menu.Item>

                    <Menu.Item 
                    as={Link} to ='/login'
                    name='/login'
                    active = {activeItem==='/login'}
                    onClick= {this.handleItemClick}>
                        {this.state.login}
                    </Menu.Item>
                    
                    <Menu.Item 
                    // as={Link} to ='/login'
                    // name='/login'
                    // active = {activeItem==='/login'}
                    onClick= {this.handleLogout}>
                        Logout
                    </Menu.Item>
                </Menu>
             </div>
        )
        
    }
 

}

export default Navbar;