/**
*  前端路由
*/

import {Switch,HashRouter,Redirect,Route,withRouter} from 'react-router-dom';
import React,{Component} from 'react';

import asyncComponent from '../../Utils/asyncComponent';
import MainPage from '../Pages/MainPage';

const LoginPage=asyncComponent(()=>import('../Pages/Login'));
const Register=asyncComponent(()=>import('../Pages/Register'));

class Router extends Component{
	render(){
		<HashRouter>
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={MainPage} />

            </Switch>
		</HashRouter>
	}
}

export default Router;
