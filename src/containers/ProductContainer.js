import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductList from './../components/ProductList'
import ProductItem from './../components/ProductItem'

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

const mapStateToProps = state =>{
    return{
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductContainer);

