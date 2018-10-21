import React, { Component } from 'react';
import {creds} from './../config/credentials';
import './App.css';

import Header from '../components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>
          {console.log(creds.username)}
        </p>
      </div>
    );
  }
}

export default App;
