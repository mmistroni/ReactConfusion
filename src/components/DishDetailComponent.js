import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import DishComments from './DishCommentsComponent';
    
    function DishDetail(props) {
        
        if (props.dish != null) {
        
            return (
                    <div className="container">
                        <div className="row">
                            <div key="details" className="col-12 col-md-5 m-1"> 
                                <Card>
                                    <CardImg width="50%" src={props.dish.image} alt={props.dish.name}/>
                                    <CardBody>
                                        <CardTitle>{props.dish.name}</CardTitle>
                                        <CardText>{props.dish.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="comments" className="col-12 col-md-5 m-1"> 
                                <DishComments dish={props.dish}/>
                            </div>
                        </div>
                    </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;
    
         