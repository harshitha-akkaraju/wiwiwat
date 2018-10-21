import React from 'react';
import {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(next) {
        this.props = next;
    }

    render() {
        return(
            <div>
                <Card>
                    <CardActionArea>
                        <CardContent style={{textAlign: "center"}}>
                            <img src={this.props.imgURL}></img>
                        </CardContent>
                        <CardContent>
                            <p>{this.props.itemName}</p>
                            <p>{"Quantity: " + this.props.itemName}</p>
                            <p>{"Units: " + this.props.itemName}</p>
                            <p>{"Distance from the closest whole number: " + this.props.itemName}</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default Result;