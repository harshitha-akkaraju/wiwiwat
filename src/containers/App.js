import React, { Component } from 'react';
import './App.css';
import './../priceData';

import Header from '../components/Header'
import Footer from '../components/Footer'

import SearchForm from './SearchForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <article id='page'>
          <SearchForm />
        </article>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
