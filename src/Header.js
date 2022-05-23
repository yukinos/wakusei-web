import React from "react";
import logo from "./images/wakusei-logo2.png";

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <div class="header-logo">
          <a href="./" target="blank">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
