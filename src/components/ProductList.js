import React, { Component } from 'react';
import Product from './ProductItem';
import { connect } from 'react-redux'

class ProductList extends Component {
	render() {
		var { products } = this.props;
		return (
			<section className="section">
				<h1 className="section-heading">Danh Sách Sản Phẩm</h1>
				<div className="row">
					{this.showProducts(products)};
				</div>
			</section>
		);
	}

	showProducts(products){
		var result = '';
		if (products.length > 0){
			result = products.map((product, index) =>{
				return 	<Product 
						key={index}
						product = {product}>
					  	</Product>
			});
		}
		return result;
	}
}

const mapStateToProp = state => {
	return{
		products : state.products
	}
}

export default connect(mapStateToProp, null)(ProductList);