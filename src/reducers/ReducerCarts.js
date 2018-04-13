import * as Types from './../constants/ActionType'
var data = JSON.parse(localStorage.getItem('CARTS'));

var initialState = data ? data : [];

var carts = ((state = initialState, action)=>{
    var {product, quantity} = action;
    var index = -1;
    
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
            localStorage.setItem("CARTS" ,JSON.stringify(state));
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