import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <Main />
    );
  }
}

export default App;
