import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import MyModal from './ModalComponent';


    function DishComments(props) {
       const comments = props.comments.map((comment) => {
                
                return (
                    <div className="row">
                        <p>{comment.comment} for dish:{props.dishId}</p>
                        <p> {comment.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                    </div>
                );
            
         });
        return (
                <Card>
                    <CardBody>
                        <CardTitle>Comments For {props.dishId}</CardTitle>
                        <CardText>{comments}<br/><MyModal dishId={props.dishId}
                                                          addComment={props.addComment}/></CardText>
                        
                    </CardBody>
                </Card>
                
        );
    }



export default DishComments;