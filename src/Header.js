import React from 'react';
import logo from "./images/wakusei-logo.png";

class Header extends React.Component{
    render(){
        return(
            <div class='header'>       
                <div class='header-logo'>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        );
    }
}

export default Header;