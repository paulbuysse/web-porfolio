import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './Header.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
