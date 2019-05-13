/**
*  前端路由
*/
import React,{Component} from 'react';
import {Switch,HashRouter,Redirect,Route} from 'react-router-dom';

import asyncComponent from '../../Utils/asyncComponent';
import MainPage from '../Pages/MainPage';

const LoginPage=asyncComponent(()=>import('../Pages/Login'));
const RegisterPage=asyncComponent(()=>import('../Pages/Register'));

class Router extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<HashRouter>
	            <Switch>
	                <Route exact path='/register' component={RegisterPage} />
	                <Route exact path='/login' component={LoginPage} />
	                <Route exact path='/' component={MainPage} />
	            </Switch>
			</HashRouter>
		)
	}
}

export default Router;
