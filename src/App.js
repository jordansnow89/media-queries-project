import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="backgroundimage">
        <div className="App-header">
            <h1 className="logo">Start Bootstrap</h1>
            <div className="menubutton" />
            <div className="list">
              <div className="header-item">Services</div>
              <div className="header-item">About</div>
              <div className="header-item">Portfolio</div>
              <div className="header-item">Team</div>
              <div className="Contact">Contact</div>
          </div> 
        </div>
      </header> 
      <div className="content">
      </div> 
      </div>
    );
  }
}

export default App;
