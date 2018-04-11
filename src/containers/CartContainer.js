import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from './../components/CartList'

class CartContainer extends Component{
    render (){
    }
}

const mapStateToProps = state =>{
    return{}
}

export default connect(mapStateToProps,null)(CartContainer);