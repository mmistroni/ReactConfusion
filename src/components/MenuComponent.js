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
        console.log('MenuComponent.OnDishSelect was triggered for:' + dish.name);
        this.setState({
            selectedDish:dish
        });
        
    }
    
    renderDish(dish) {
            if(dish != null) {
                return(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="50%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                        
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
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
    
    
}


export default Menu;