import * as Types from './../constants/ActionType';
var defaultData = [
    {
        id : 1,
        name : 'iphone 6',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham do Apple san xuat',
        price : 500,
        inventory : 3, // số lượng tồn trong kho 
        rating : 3
    },
    {
        id : 2,
        name : 'Samsung galaxy',
        image : 'http://images.samsung.com/is/image/samsung/ae-galaxy-a8-a530-sm-a530fzkgxsg-frontblack-thumb-89823202?$PG_PRD_CARD_PNG$',
        description : 'San pham do samsung san xuat',
        price : 700, 
        inventory : 13, // số lượng tồn trong kho 
        rating : 5
    },
    {
        id : 3,
        name : 'iphone X',
        image : 'https://store.storeimages.cdn-apple.com/8561/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-gray-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510330',
        description : 'San pham do Apple san xuat',
        price : 1000,
        inventory : 3, // số lượng tồn trong kho 
        rating : 5
    }
];
var data = JSON.parse(localStorage.getItem(Types.LOCAL_STORAGE_PRODUCT));
var initialState = data ? data : defaultData;

const products = ((state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
});

var findIndex = (state, product) =>{
    var index = -1;
    if(state.length > 0){
        for (var i = 0; i < state.length; i++){
            if(state[i].id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default products;