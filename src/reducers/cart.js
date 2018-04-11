import * as types from './../constants/ActionType'

var initialState = [
    {
        product:{
            id : 1,
            name : 'iphone 6',
            image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description : 'San pham do Apple san xuat',
            price : 500,
            inventory : 3, // số lượng tồn trong kho 
            rating : 3
        },
        quantity : 1
    }
]

var cart = ((state = initialState, action)=>{
    switch(action.type){
        case types.ADD_TO_CARD :{
            console.log(action);
            return [...state];
        }
        default: return [...state];
    }
});

export default cart;