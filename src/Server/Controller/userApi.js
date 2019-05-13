const router=require('koa-router')();

const SQL_API=require('./SQL');

const writeBack=(ctx,params)=>{
	ctx.body=params;
}

const parsePostData=()=>{
	
}
//login

router.post('/user/login',async (ctx,next)=>{
	console.log('user/login');
	const postData=await 
})

