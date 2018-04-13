import * as Types from './../constants/ActionType'
var data = JSON.parse(localStorage.getItem(Types.LOCAL_STORAGE_CART));

var initialState = data ? data : [];

var carts = ((state = initialState, action)=>{
    var index = -1;
    var {product, quantity} = action;

    switch(action.type){
        case Types.ADD_TO_CARD :{
            index = findIndex(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem(Types.LOCAL_STORAGE_CART ,JSON.stringify(state));
            return [...state];
        }
        case Types.DELETE_CART: {
            index = findIndex(state, product);
            if (index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem(Types.LOCAL_STORAGE_CART, JSON.stringify(state));
            return [...state];
        }
        default: {
            return　[...state];
        }
    }
});

var findIndex = (carts, product) => {
    var index = -1;
    if(carts.length > 0){
        for (var i = 0; i < carts.length; i++){
            if(carts[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default carts;