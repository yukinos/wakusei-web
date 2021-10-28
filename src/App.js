import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Stars from './Stars';
import './stars.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {
          //<Main />
        }
        <div class="star comet"></div>
        {
          // <Footer />
        }
      </div>
    );
  }
}

export default App;
