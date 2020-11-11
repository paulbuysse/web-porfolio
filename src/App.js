import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Projects from './Projects.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <header className="App-header">
          <Router>
            <Route path="/projects" component={Projects} />
          </Router>

        </header>
      </div>
    );
  }
}

export default App;
