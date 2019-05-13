import {call,put,cancel,fork,takeEvery,takeLatest,all} from 'redux-saga/effects';
import {delay} from 'redux-saga';

import * as ActionType from '../Actions';
import {login} from '../Service';

//用户登录
function* loginInf(payload){
    try{
        const response=yield call(login,payload.payload);
        console.log(`response is `,JSON.stringify(response));

    }catch(ex){

    }
}


function* watchLoginAPI(){
    yield takeLatest(ActionType.LOGIN_ACTION,loginInf);
}
export default function* rootSaga(){
	try{
       yield fork(watchLoginAPI);
	}catch(ex){

	}
}