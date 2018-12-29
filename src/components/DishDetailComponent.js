import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null    
        };
    }
    
    render() {
        
        return (
                <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                            <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                            </CardImgOverlay>
                            <CardBody width="50%">
                                <p>{this.props.dish.description}</p>
                            </CardBody>
                    </Card>
                    
                </div>
            );
    }
}

export default DishDetail;
    
         