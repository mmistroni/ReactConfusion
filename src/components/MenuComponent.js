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
        this.onDishSelect = this.onDishSelect.bind(this);
        
    }
    
    onDishSelect(dish) {
        this.setState({
            selectedDish:dish
        });
        
    }
    
    renderDish(dish) {
            if(dish != null) {
                return (
                    <DishDetail dish={dish} detail="true"/>
                );
                
            } else {
                return (
                    <div></div>
                );
            }
        }
        
        
    
    render() {
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <DishDetail dish={dish} action={this.onDishSelect}/>
            );
        });
        
        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
                
            </div>
        );
    }
    
    
}


export default Menu;