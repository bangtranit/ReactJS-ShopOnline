import * as types from './../constants/ActionType'

export const addCart = (product, quantity) =>{
    return{
        type : types.ADD_TO_CARD,
        product,
        quantity
    }
}