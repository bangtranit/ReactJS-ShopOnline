import React, { Component } from 'react'
import Message from './../components/Message'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MessageContainer extends Component{
    render(){
        var {message} = this.props;
        return(
            <Message
            message = {message}
            />
        );
    }
}

MessageContainer.propType = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = state =>{
    return{
        message: state.message
    }
}

export default connect(mapStateToProps,null)(MessageContainer);