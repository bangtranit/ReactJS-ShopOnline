import * as Types from './../constants/ActionType'

export const actAddToCart = (product, quantity) =>{
    return{
        type : Types.ADD_TO_CARD,
        product,
        quantity
    }
}

export const changeMessage = message =>{
    return{
        type : Types.CHANGE_MESSAGE,
        message
    }
}

export const deleteCart = product =>{
    return{
        type : Types.DELETE_CART,
        product
    }
}