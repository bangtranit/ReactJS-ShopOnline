import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from './../components/CartList'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as Messages from './../constants/Message'
import PropTypes from 'prop-types'

class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        console.log(carts);
        return (
            <CartList>
                {this.showCarts(carts)}
                {this.showAmount(carts)}
            </CartList>
        );
    }
    showCarts = (carts) => {
        var result = Messages.MSG_NOT_HAVE_CART;
        if (carts) {
            result = carts.map((cart, index) => {
                return <CartItem
                    key={index}
                    cart={cart} />
            });
        }
        return result;
    }
    showAmount = (carts) =>{
        var result = null;
        if(carts){
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
    })).isRequired

}


const mapStateToProps = state => {
    return {
        carts: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);