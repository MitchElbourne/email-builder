import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Stage from './Stage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Sidebar />

          <Stage />

        </div>
      </Router>
    );
  }
}

export default App;
