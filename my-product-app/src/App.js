//import logo from './logo.svg';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Page01 from './Page01';
import Page04 from './Page04';
import Project from './Project_01';
class App extends Component {
  render() {
  return (
    <div className="App container">
        <Route path="/Project_01" component={Project} />
        <Route path="/Page01" component={Page01} />
        <Route path="/Page04" component={Page04} />
        
      </div>
  );
  }
}

export default App;
