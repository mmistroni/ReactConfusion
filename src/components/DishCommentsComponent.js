import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';


    function RenderCommentForm() {
        return (
            <LocalForm >
                <Row className="form-group">
                    <Col md={{size:10, offset: 2}}>
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        
        );
    }


    function DishComments(props) {
    
        const comments = props.comments.map((comment) => {
                return (
                    <div className="row">
                        <p>-- {comment.comment}</p>
                        <p> {comment.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                    </div>
                );
            
         });
        return (
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{comments}<br/><RenderCommentForm/></CardText>
                    </CardBody>
                </Card>
                
        );
    }



export default DishComments;