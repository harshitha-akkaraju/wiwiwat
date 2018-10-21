import React from 'react';
import './App.css';
import {TextField} from '@material-ui/core';
import { getClosestItem } from '../productFinder';
import { NativeSelect, MenuItem, ListItemText } from '@material-ui/core';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange(name) {
    return event => {
      this.setState({ [name]: event.target.value }, () => {
        if (this.state.weight && this.state.cost && this.state.units) {
          let data = getClosestItem(this.state.cost, this.state.units, this.state.weight);
          this.props.updateAppState(data);
        }
      });
    };
  }

  render() {
    return (
      <form className="userInput">
        <TextField id="object" label="OBJECT" type="text" className={"field"}
          variant="outlined" onChange={this.handleChange("object-name")}/>
        <TextField id="value" label="COST" type="number" className={"field"}
          variant="outlined" onChange={this.handleChange("cost")}/>
        {/* <TextField id="weight" label="Quantity" type="number" defaultValue={1} className={"field"} variant="outlined" onChange={this.handleChange("weight")}/> */}
        <TextField id="quantity" label="Weight (1 unit)" type="number" defaultValue={0} className={"field"} variant="outlined" onChange={this.handleChange("weight")}/>
        <NativeSelect onChange={this.handleChange("units")}>
          <option>UNITS</option>
          <option>lbs</option>
          <option>kgs</option>
          <option>oz</option>
        </NativeSelect>
      </form>
    );
  }
}

export default SearchForm;
