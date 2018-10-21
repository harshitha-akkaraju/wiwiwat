import React from 'react';
import './SearchForm.css';
import {TextField} from '@material-ui/core';

class SearchForm extends React.Component {
  render() {
    return (
      <div className="App">
        <TextField id="weight" label="weight in lbs" fullWidth/>
      </div>
    );
  }
}

export default SearchForm;
