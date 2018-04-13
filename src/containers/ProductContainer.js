import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductList from './../components/ProductList'
import ProductItem from './../components/ProductItem'
import * as actions from './../actions/index'
import PropTypes from 'prop-types';


class ProductContainer extends Component{
    render(){
        var {products} = this.props;
        return(
            <ProductList>
                { this.showProducts(products) }
            </ProductList>
        );
    }

    showProducts(products){
        var result = '';
        var { onAddToCart, onChangeMessage } = this.props;
		if (products.length > 0){
			result = products.map((product, index) =>{
				return 	<ProductItem 
						key={index}
						product = {product}
                        onAddToCart = {onAddToCart}
                        onChangeMessage = {onChangeMessage}
                        >
					  	</ProductItem>
            
			});
		}
		return result;
    }
}

ProductContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequire,
            name : PropTypes.string.isRequire,
            image : PropTypes.string.isRequire,
            description : PropTypes.string.isRequire,
            price : PropTypes.number.isRequire,
            inventory : PropTypes.number.isRequire,
            rating : PropTypes.number.isRequire
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired
}


const mapStateToProps = state =>{
    return{
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddToCart : product =>{
            dispatch(actions.actAddToCart(product, 1));
        },
        onChangeMessage: message =>{
            dispatch(actions.changeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

