import React from "react";
import alien1 from "./images/alien1.png";
import alien2 from "./images/alien2.png";

class Main1 extends React.Component {
  render() {
    return (
      <div class="content1">
        <img src={alien1} class="alien1" alt="alien1" />
        <img src={alien2} class="alien2" alt="alien2" />
        <h2>インターネットにぽつりとうかぶちいさな星</h2>
        <h2>まわりのほしぼしからたくさんの人が集います</h2>
        <h2>静かに作業集中したい人</h2>
        <h2>お話ししながら作業したい人</h2>
        <h2>自分のいばしょがほしい人</h2>
        <h2>こどくを感じている人</h2>
        <h2>わくせいはみなさんをかんげいします</h2>
      </div>
    );
  }
}

export default Main1;
