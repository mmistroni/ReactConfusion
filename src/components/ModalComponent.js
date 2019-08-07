import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

import Modal from 'react-awesome-modal';

// Refactor this into a component as we need to set the state for the react popup




class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            dishId: props.dishId
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
    
    handleSubmit(values) {
        var copy_dict = {}    
        for(var key in values)
        {
            copy_dict[key] = values[key];
        }
        
        copy_dict['dishId'] = this.state.dishId;
        alert("Copy: " + JSON.stringify(copy_dict));
        
        this.closeModal();
    }
    
    render() {
        return (
            <section>
            <input type="button" value="Add Comment" onClick={() => this.openModal()} />
            
            <Modal visible={this.state.visible}  effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div style={{ width:300, height: 350, justifyContent:'center' }}>
                        
 
            
                        <h4 align="center">Enter Your Comment for {this.state.dishId}</h4>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={{size:10, offset:1}}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Author"
                                        className="form-control"
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group"> 
                                <Col md={{size:4, offset:1}}>
                                    <div className="form-check">
                                        <Label check>
                                            Rating
                                        </Label>
                                    </div>
                                </Col> 
                                <Col md={{size:6}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option> 
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            
                                <Col md={{size:10, offset:1}} align="center">
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Add your comments"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            
                                <Col md={{size:10, offset: 2}} align="center">
                                    <Button type="submit" color="primary">
                                        Add  Comment
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                        
                    </div>
                </Modal>
            </section>
        );
    }
}
export default MyModal;