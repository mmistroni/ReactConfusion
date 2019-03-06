import {DISHES} from '../shared/dishes.js';
import {PROMOTIONS} from '../shared/promotions.js';
import {COMMENTS} from '../shared/comments.js';
import {LEADERS} from '../shared/leaders.js';

export const initialState = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    comments:COMMENTS,
    leaders:LEADERS
    
};

export const Reducer = (state = initialState, action) =>{
  return state;  
    
};