import React, { Component } from 'react';
import Header from './components/Header'
import ProductContainer from './containers/ProductContainer'
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
		                <ProductContainer />		                 
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
