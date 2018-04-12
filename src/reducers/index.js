import { combineReducers } from 'redux';
import products from './products';
import carts from './carts'

var appReducer = combineReducers({
    products,
    carts
});

export default appReducer;

