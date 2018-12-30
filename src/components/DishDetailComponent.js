import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
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
    
    renderComments() {
        const dishComments= {
            
        }
    }
    
    
    renderDetail() {
            return (
                    <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
        }
        
    
    
    render() {
        if (this.props.detail == null) {
            console.info('no details. displaying default...')
            return this.renderStandard();
        } else {
            return this.renderDetail();
        }
    }
}

export default DishDetail;
    
         