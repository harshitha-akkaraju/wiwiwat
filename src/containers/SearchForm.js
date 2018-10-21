import React from 'react';
import './SearchForm.css';
import {TextField} from '@material-ui/core';
import { getClosestItem } from '../productFinder';

class SearchForm extends React.Component {
  render() {
    console.log(getClosestItem(.29, "lb", 2.3));
    return (
      <div className="App">
        <TextField id="weight" label="weight in lbs" fullWidth/>
      </div>
    );
  }
}

export default SearchForm;
