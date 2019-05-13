import * as ActionType from '../Actions';
console.log("actionType is "+JSON.stringify(ActionType))
const initialState={
    list:'',
    dataType:'',
}
export const mainpage=(state=initialState,action)=>{
    const type=action.type;
    switch(type){
    	case ActionType.GET_LIST:
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