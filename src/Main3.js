import React from "react";
import alien5 from "./images/alien5.png";
import alien6 from "./images/alien6.png";

class Main3 extends React.Component {
  render() {
    return (
      <div class="content3">
        <img src={alien5} class="alien5" alt="alien5" />
        <img src={alien6} class="alien6" alt="alien6" />
        <h2>ほかにもかいたイラストをのせるチャンネル</h2>
        <h2>好きな音楽を共有するチャンネル</h2>
        <h2>食べた料理の写真をみせるチャンネル</h2>
        <h2>筋トレの記録をじまんするチャンネル</h2>
        <h2>またリレー小説をみんなで考えたり</h2>
        <h2>
          誰でもおじょう様になれるおじょう様部などヘンテコなものもあります
        </h2>
        <h2>わくせいの仲間たちとの交流を楽しもう</h2>
      </div>
    );
  }
}

export default Main3;
