import React, { Component } from 'react';
import './App.css';
import './../priceData';

import Header from '../components/Header'
import Footer from '../components/Footer'

import SearchForm from './SearchForm'
import Result from './Result'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.updateAppState = this.updateAppState.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  updateAppState(data) {
    this.setState({
      data: data
    });
  }

  render() {
    let result = this.state.data.length > 0 ? this.getRandomInt(this.state.data.length) : null;

    return (
      <React.Fragment>
        <Header />
        <article id='page'>
          <SearchForm updateAppState={this.updateAppState}/>
          <br/>
          
          {result && 
            <div>
              <h3 style={{ textAlign: 'center' }}>Here's what we found!</h3>
              <Result itemName={result.itemName} weight={result.weight} unit={result.unit} distFromWholeNum={result.distFromWholeNum} imgURL={result.imgURL} />
            </div>
          }
          
        </article>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;