import React from "react";
import Discordlogo from "./images/Discord-logo.png";

class Hero extends React.Component {
  render() {
    return (
      <div class="background">
        <div class="box">
          <img src={Discordlogo} class="Discordlogo" alt="Discordlogo" />
          <h2 class="sub-title">サーバー</h2>
          <h1 class="title">わくせい</h1>
        </div>
      </div>
    );
  }
}

export default Hero;
