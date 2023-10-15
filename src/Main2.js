import React from "react";
import alien3 from "./images/alien3.png";
import alien4 from "./images/alien4.png";

class Main2 extends React.Component {
  render() {
    return (
      <div class="content2">
        <img src={alien3} class="alien3" alt="alien3" />
        <img src={alien4} class="alien4" alt="alien4" />
        <h2>わくせいには3種類のボイスチャンネルがあります</h2>
        <h2>モクモクチャンネルではモクモク作業を</h2>
        <h2>ノンビリチャンネルではノンビリお話を</h2>
        <h2>ワイワイチャンネルではワイワイゲームを</h2>
        <h2>あなたの気分によって使い分けましょう</h2>
        <h2>すべての通話チャンネルにはヘンテコなエイリアンたちがいます</h2>
        <h2>話しかけると何か返事が返ってくるかもしれませんね</h2>
      </div>
    );
  }
}

export default Main2;
