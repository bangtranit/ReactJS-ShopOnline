import * as Types from './../constants/ActionType';
var defaultData = [
    {
        id : 1,
        name : 'iphone 6',
        image : 'https://images-fe.ssl-images-amazon.com/images/I/41qYOi0XYPL._SL500_AC_SS350_.jpg',
        // image : "%PUBLIC_URL%/img/iphone6.png",
        description : 'San pham do Apple san xuat',
        price : 500,
        inventory : 3, // số lượng tồn trong kho 
        rating : 3
    },
    {
        id : 2,
        name : 'Docome galaxy S6',
        image : 'http://www.galaxymobile.jp/common/images/pdp/buy_docomo-galaxy-s6.png',
        description : 'San pham do docomo san xuat',
        // image : "./../%PUBLIC_URL%/img/docomoS6.png",
        price : 700, 
        inventory : 13, // số lượng tồn trong kho 
        rating : 5
    },
    {
        id : 3,
        name : 'iphone X',
        image : 'https://http2.mlstatic.com/apple-iphone-x-64gb-lacrado-garantia-1-ano-nota-fiscal-D_NQ_NP_700474-MLB26700561612_012018-F.jpg',
        description : 'San pham do Apple san xuat',
        // image : "%PUBLIC_URL%/img/iphonex.png",
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