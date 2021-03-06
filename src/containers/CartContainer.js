import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from './../components/CartList'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as Messages from './../constants/Message'
import * as Actions from './../actions/index'
import PropTypes from 'prop-types'

class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        
        return (
            <CartList>
                {this.showCart(carts)}
                {this.showAmount(carts)}
            </CartList>
        );
    }

    showCart = (carts) => {
        var result=Messages.MSG_NOT_HAVE_CART;
        var {onDeleteCart, onChangeMessage, onUpdateCart} = this.props;
        if (carts.length > 0) {
            result = carts.map((cart, index) =>{
                return <CartItem
                        key={index}
                        cart={cart} 
                        onDeleteCart={onDeleteCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateCart={onUpdateCart}/>
            });
        }
        return result;
    }
    
    showAmount = (carts) =>{
        var result='';
        if(carts.length > 0){
            return <CartResult carts = {carts} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    carts : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequire,
            name : PropTypes.string.isRequire,
            image : PropTypes.string.isRequire,
            description : PropTypes.string.isRequire,
            price : PropTypes.number.isRequire,
            inventory : PropTypes.number.isRequire,
            rating : PropTypes.number.isRequire
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired,
    onDeleteCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateCart : PropTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onDeleteCart : id =>{
            dispatch(Actions.deleteCart(id));
        },
        onChangeMessage : message =>{
            dispatch(Actions.changeMessage(message));
        },
        onUpdateCart : (product, quantity) => {
            dispatch(Actions.updateCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);