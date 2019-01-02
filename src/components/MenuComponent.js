import React, {Component} from 'react';
import {Media} from'reactstrap';
import DishDetail  from './DishDetailComponent'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null
        }
    }
    
    onDishSelect(dish) {
        this.setState({
            selectedDish:dish
        });
        
    }
    
    render() {
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <DishDetail dish={dish} action={this.onDishSelect.bind(this)}/>
            );
        });
        
        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} detail="true"/>
                
            </div>
        );
    }
    
    
}


export default Menu;