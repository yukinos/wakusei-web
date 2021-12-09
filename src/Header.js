import React from 'react';
import logo from './images/wakusei-logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
