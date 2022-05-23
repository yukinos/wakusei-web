import React from "react";
import mokumoku1 from "./images/mokumoku1.png";
import waiwai1 from "./images/waiwai1.png";

class Main3 extends React.Component {
  render() {
    return (
      <div>
        <div class="content2">
          <img src={mokumoku1} class="mokumoku1" alt="mokumoku1" />
          <img src={waiwai1} class="waiwai1" alt="waiwai1" />
        </div>
      </div>
    );
  }
}

export default Main3;
