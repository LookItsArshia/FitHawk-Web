import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';



class Navbar extends React.Component{
    state = {};
    handleItemClick = (e,{name})=> this.setState({activeItem:name});

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
                        Login
                    </Menu.Item>
                </Menu>
             </div>
        )
        
    }
 

}

export default Navbar;