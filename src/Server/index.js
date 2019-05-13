const Koa=require('koa');
const Json=require('koa-json');
const Http=require('http');
const bodyParser=require('koa-bodyparser')();
const cors=require('koa2-cors');

const convert=require('koa-convert');
const session=require('koa-session');

const app=new Koa();
app.keys=['qiuhaoxin'];
app.use(cors({
	origin:function(ctx){
		return 'http://localhost:3008',
	},
	exposeHeader:['WWW-Authenticate','Server-Authorization'],
	maxAge:5,
    credentials:true,
    allowMethods:['POST','GET','PUT','DELETE'],
    allowHeaders:['Content-Type','Authorization',
    'Accept','Contentent-Length','X-Request-Width'],
}));

const SESSION_CONFIG={
	key:'koa:sess',
    maxAge:864000000,
    overwrite:true,
    httpOnly:true,
    signed:true,
    renew:false,
    rolling:false,
};
app.use(session(SESSION_CONFIG,app));
app.use(bodyParser);
app.use(require('./Controll/userApi').routes());
app.use(require('./Controll/Api').routes());



