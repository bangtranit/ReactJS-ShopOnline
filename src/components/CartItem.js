import React, { Component } from 'react';
import * as Message from './../constants/Message'
import './css/component.css'
class CartItem extends Component {
  	render() {
		  var {product,quantity} = this.props.cart;
	    return (
			<tr>
				<th scope="row">
					<img src={ product.image }
						alt="" className= {product.name} />
				</th>
				<td>
					<h5>
						<strong>{ product.name }</strong>
					</h5>
				</td>
				<td>{product.price}$</td>
				<td className="center-on-small-only">
					<span className="qty">{quantity} </span>
                    <div 
                        className="btn-group radio-group ml-30" data-toggle="buttons">
						<label className="btn btn-sm btn-primary
							btn-rounded waves-effect waves-light"
                            onClick={()=>this.onClickUpdate(product, -1)}>
							<a>—</a>
						</label>
						<label className="btn btn-sm btn-primary
							btn-rounded waves-effect waves-light"
                            onClick={()=>this.onClickUpdate(product, 1)}>
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{ this.totalPrices(product.price, quantity)}$</td>
				<td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick={()=> this.onClickDeleteCart(product)}>
						X
					</button>
				</td>
			</tr>
	    );
	  }
	totalPrices = (prices, quantity) => {
		return prices * quantity
    }
    onClickDeleteCart = product =>{
        this.props.onDeleteCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    onClickUpdate = (product, quantity) =>{
        this.props.onUpdateCart(product, quantity);
        this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }
    
		
}

export default CartItem;
