import * as Types from './../constants/ActionType'
import * as Messages from './../constants/Message'

var intialState = Messages.MSG_WELCOME;

var message = ((state = intialState, action)=>{
    switch(action.type){
        case Types.CHANGE_MESSAGE: {
            state = action.message;
            return state;
        }
        default: return state;
    }
});
export default message;