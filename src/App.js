import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//component imports
import Header from './Header.js';
import SlideShow from './SlideShow.js';
import Projects from './Projects.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="divNav"><br /></div>
        <SlideShow />
        <Projects />
        <header className="App-header">
          <Router>

          </Router>

        </header>
      </div>
    );
  }
}

export default App;
