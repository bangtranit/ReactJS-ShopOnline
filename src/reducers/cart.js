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
    },
    {
        product:{
            id : 2,
            name : 'Samsung galaxy',
            image : 'http://images.samsung.com/is/image/samsung/ae-galaxy-a8-a530-sm-a530fzkgxsg-frontblack-thumb-89823202?$PG_PRD_CARD_PNG$',
            description : 'San pham do samsung san xuat',
            price : 700, 
            inventory : 13, // số lượng tồn trong kho 
            rating : 5
        },
        quantity : 5
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