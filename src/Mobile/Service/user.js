require('isomorphic-fetch');
import Request from './require.js';


//登陆
export function login(params){
	return Request('',{
		method:'POST',
		body:params,
	})
}

