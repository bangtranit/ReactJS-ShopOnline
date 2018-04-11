import React, { Component } from 'react';
import Header from './components/Header'
import ProductList from './components/ProductList'
import Message from './components/Message'
import CartList from './components/CartList'
import Footer from './components/Footer'
class App extends Component {
  	render() {
	    return (
	      	<div>
		        <Header />
		        <main id="mainContainer">
		            <div className="container">
		                <ProductList />		                 
		                <Message />
		                <CartList />
		            </div>
		        </main>
		        <Footer />
		    </div>
	    );
  	}
}

export default App;
