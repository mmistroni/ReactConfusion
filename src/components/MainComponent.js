import React, {Component} from 'react';
import {Media} from'reactstrap';
import DishDetail  from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes.js'

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
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                    detail="true"/>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;