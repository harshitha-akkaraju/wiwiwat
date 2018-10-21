import React, { Component } from 'react';
import {creds} from './../config/credentials';
import './App.css';

import Header from '../components/Header'
import Footer from '../components/Footer'

import SearchForm from './SearchForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
<<<<<<< HEAD
        <p>
          {console.log(creds.username)}
        </p>
      </div>
=======
        <article id='page'>
          <SearchForm />
        </article>
        <Footer />
      </React.Fragment>
>>>>>>> b8f0b032216e1094925206e47ce4e9611cfcde04
    );
  }
}

export default App;
