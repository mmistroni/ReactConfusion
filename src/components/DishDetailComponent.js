import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import DishComments from './DishCommentsComponent';
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    renderStandard() {
            return (
                    <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.props.action(this.props.dish)}>
                                <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name}/>
                                <CardImgOverlay>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                </CardImgOverlay>
                        </Card>
                    </div>
                );
    }
    
    renderDishDetails() {
        return (
            <div id="dishContainer" className="row">
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
        );
    }
    
    
    render() {
        if (this.props.dish != null) {

            if (this.props.detail == null) {
                return this.renderStandard();
            } else {
                return this.renderDishDetails();
            }
        } else {
            return ("<div></div>")
        }
    }
}

export default DishDetail;
    
         