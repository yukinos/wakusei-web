import React from "react";
import logo from "./images/wakusei-logo.png";

function Alert(){
  alert("あいうえお");
}


class Header extends React.Component {

  render() {
    return (
          <div class="header">
              <p class="head-cha">キャラクター</p>
              <p class="head-ri">りようきやく</p>
         <div class="header-logo">
          <a href="./" target="blank">
            <img src={logo} alt="logo" />
            <div>{Alert}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
