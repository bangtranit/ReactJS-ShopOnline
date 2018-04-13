import { combineReducers } from 'redux';
import products from './ReducerProducts';
import carts from './ReducerCarts'
import message from './ReducerMessage'

var appReducer = combineReducers({
    products,
    carts,
    message
});

export default appReducer;

