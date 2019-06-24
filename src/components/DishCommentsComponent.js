import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import Popup from './Popup';
// Refactor this into a component as we need to set the state for the react popup

class Modal extends React.Component {
  render() {
      if(!this.props.show){
          return null;
      }
        return <div>Hello Modal</div>;
  }
}


class RenderCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
        };
    }
    
    showModal() {
        console.info('Showimg Modal...' + this.state.show)

        this.setState({
          show: true
        });
    }
    
    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(this.state));
        console.log("Submitting. we should opena popup..");
        this.showModal();
    }
    
    
    render() {
        return (
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Col md={{size:10, offset: 2}}>
                        <Button type="submit" color="primary">
                            Send Feedbackss
                        </Button>
                        <Modal show={this.state.show}/>
                    </Col>
                </Row>
            </LocalForm>
            
        
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