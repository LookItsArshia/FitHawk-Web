import React from 'react';
import {Menu} from 'semantic-ui-react';
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
                    position = "right" 
                    name='Home'
                    active={activeItem==='Home'}
                    onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>

                    <Menu.Item 
                    name='About'
                    active={activeItem==='About'}
                    onClick={this.handleItemClick}>
                        About
                    </Menu.Item>

                    <Menu.Item name='Profile'
                    active={activeItem==='Profile'}
                    onClick= {this.handleItemClick}>
                        Profile
                    </Menu.Item>

                    <Menu.Item name='Contact'
                    active = {activeItem==='Contact'}
                    onClick= {this.handleItemClick}>
                        Contact
                    </Menu.Item>
                </Menu>
             </div>
        )
        
    }


}

export default Navbar;