import React, {Component} from 'react';
import {Media} from'reactstrap';
import DishDetail  from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from  './HomeComponent';
import Contact from  './ContactComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes.js';
import {PROMOTIONS} from '../shared/promotions.js';
import {COMMENTS} from '../shared/comments.js';
import {LEADERS} from '../shared/leaders.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            comments:COMMENTS,
            leaders:LEADERS
        }
    }
    
    
    
    render() {
        
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.state.promotions.filter((prom) => prom.featured)[0]}
                      leader={this.state.leaders.filter((lead) => lead.featured)[0]}
                />
            );
        }
        
        return ( 
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/aboutus" component= {() => <About leaders={this.state.leaders}/>}/>    
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;