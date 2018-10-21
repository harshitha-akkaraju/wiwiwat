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
                            <img src={this.props.imgURL} style={{width: 300, height:300}}></img>
                        </CardContent>
                        <CardContent>
                            <p>{this.props.itemName}</p>
                            <p>{"This item is approximately worth its weight in: " + this.props.itemName}</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default Result;