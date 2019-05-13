import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router from './Router';
import rootSaga from './Saga';
import configStore from './createStore';

const store=configStore();

store.runSaga(rootSaga);

function render(MyComponent){
   return ReactDOM.render(
       <Provider store={store}>
          <MyComponent />
       </Provider>,
       document.getElementById('root')
   )
}
render(Router);

if(module.hot){
	module.hot.accept(()=>{
		render('./Router');
	})
}

