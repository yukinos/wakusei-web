import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Main2 from "./Main2";
import Border from "./border";
import Main3 from "./Main3";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main2 />
        <Main />
        <Border />
        <Main3 />
      </div>
    );
  }
}

export default App;
