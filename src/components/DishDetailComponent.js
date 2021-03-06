import React, {Component} from 'react';
import {Media} from'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishComments from './DishCommentsComponent';
import {Loading} from './LoadingComponent';
    function RenderDish({dish}) {
        return (
            <div key="details" className="col-6 col-md-5 m-1"> 
            <Card>
                <CardImg width="50%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }

    function RenderComments({comments, addComment, dishId}) {
        
        return(
            <div key="comments" className="col-6 col-md-5 m-1"> 
                <DishComments comments={comments}
                              addComment={addComment}
                              dishId={dishId}/>
            </div>
        );
    }


    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.erMess}</h4>
                    </div>
                </div>
            );
        } else if (props.dish != null) {
            return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name} @ {props.dish.id}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            <RenderDish dish={props.dish}/>
                            <RenderComments comments={props.comments}
                                    addComment={props.addComment}
                                    dishId={props.dish.id}/>
                            
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
    
         