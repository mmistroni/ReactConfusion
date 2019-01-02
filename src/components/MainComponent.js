import React, {Component} from 'react';
import {Media} from'reactstrap';
import DishDetail  from './DishDetailComponent'
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes.js'
import {Navbar,NavbarBrand} from 'reactstrap'


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null,
            dishes: DISHES
        }
    }
    
    onDishSelect(dishId) {
        console.log('MainComponent.onDishSelect called...')
        this.setState({
            selectedDish: dishId
        });
    }
    
    render() {
        return ( 
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                    detail="true"/>
            </div>
        );
    }
}

export default MainComponent;