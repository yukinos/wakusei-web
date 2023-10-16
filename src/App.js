import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';

import Header from "./Header";
import Hero from "./Hero";
import Border1 from "./border1";
import Border2 from "./border2";
import Border3 from "./border3";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <div class="whiteback" />
        <Main1 />
        <Border1 />
        <Main2 />
        <Border2 />
        <Main3 />
        <Border3 />
        <Main4 />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
