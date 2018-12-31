import React, {Component} from 'react';
import {Media} from'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

class DishComments extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div className="row">
                        <p>-- {comment.comment}</p>
                        <p> {comment.author}  {comment.date} </p>
                    </div>
                );
            
         });
        return (
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{comments}</CardText>
                    </CardBody>
                </Card>
                
        );
    }
}


export default DishComments;