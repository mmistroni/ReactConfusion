import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import DishComments from './DishCommentsComponent';
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    renderDishDetails() {
        return (
                <div className="container">
                    <div className="row">
                        <div key="details" className="col-12 col-md-5 m-1"> 
                            <Card>
                                <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div key="comments" className="col-12 col-md-5 m-1"> 
                            <DishComments dish={this.props.dish}/>
                        </div>
                    </div>
                </div>
        );
    }
    
    renderEmpty() {
        return (
            <div></div>
        );
    }


    render() {
        if (this.props.dish != null) {
            return this.renderDishDetails();
            
        } else {
            return this.renderEmpty();
        }
    }
}

export default DishDetail;
    
         