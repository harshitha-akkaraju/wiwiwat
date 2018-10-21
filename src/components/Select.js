import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {data} from './../priceData';
import { NativeSelect, MenuItem, ListItemText } from '@material-ui/core';

class Select extends Component {
    render() {
        let options = [];
        data.forEach((item, index) => {
            console.log(item.itemName);
            options.push(
                <option key={index}>{item.itemName}</option>
            );
        });
        return(
            <NativeSelect className="weightInput">
                {console.log(options)}
                {options}
            </NativeSelect>
        );
    }
}

export default Select;