import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductList from './../components/ProductList'
import ProductItem from './../components/ProductItem'
import PropTypes from 'prop-types';


class ProductContainer extends Component{
    render(){
        var {products} = this.props;
        console.log(products)
        return(
            <ProductList>
                { this.showProducts(products) }
            </ProductList>
        );
    }
    showProducts(products){
		var result = '';
		if (products.length > 0){
			result = products.map((product, index) =>{
				return 	<ProductItem 
						key={index}
						product = {product}>
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
    ).isRequired
}


const mapStateToProps = state =>{
    return{
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductContainer);

