import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore()
  

class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <Provider store={store}>        
          <BrowserRouter>
            <div>
                <Main />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
