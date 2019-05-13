import {createStore,applyMiddleware} from 'redux';
import rootReducers from './Reducers';
import createSagaMiddleware from 'redux-saga';

export default function configStore(){
	const sagaMiddleware=createSagaMiddleware();
	return {
		...createStore(rootReducers,applyMiddleware(sagaMiddleware)),
		runSaga:sagaMiddleware.run,
	}
}