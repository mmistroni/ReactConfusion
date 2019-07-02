import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import Popup from './Popup';
import Modal from 'react-awesome-modal';
// Refactor this into a component as we need to set the state for the react popup

class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    
    
    
    render() {
        return (
            <section>
            <input type="button" value="Add Comment" onClick={() => this.openModal()} />
                  
            <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Enter Your Comment</h1>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label  htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        />
                                </Col>
                            </Row>
                        </LocalForm>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}


class RenderCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
        };
    }
    
    
    
    
    render() {
        return (
            <MyModal/>
            
        
        );
    }
}
        
        


    

    function DishComments(props) {
    
        const comments = props.comments.map((comment) => {
                return (
                    <div className="row">
                        <p>{comment.comment}</p>
                        <p> {comment.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                    </div>
                );
            
         });
        return (
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{comments}<br/><RenderCommentForm showPopUp="false"/></CardText>
                        
                    </CardBody>
                </Card>
                
        );
    }



export default DishComments;