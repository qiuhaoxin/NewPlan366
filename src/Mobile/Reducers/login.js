import * as ActionTypes from '../Actions';

const initialState={
	userName:'',
    passWord:'',
}

export const login=(state=initialState,action)=>{
    const type=action.type;
    switch(type){
    	case ActionTypes.LOGIN_ACTION:
            return {
            	...state,
            }
    	break;
    	default:
            return {
                ...state,
            }
        break;
    }
}
