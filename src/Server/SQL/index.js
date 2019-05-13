const SQL_CONFIG=require('../SqlConfig');
const mysql=require('mysql');

const env=process.env.NODE_ENV || 'production';

const SQL_CONFIG_DETAIL=env=='production' ? SQL_CONFIG.prod : SQL_CONFIG.dev;

const pool=mysql.createPool({
   host:SQL_CONFIG_DETAIL.HOST,
   user:SQL_CONFIG_DETAIL.USERNAME,
   password:SQL_CONFIG_DETAIL.PASSWORD,
   port:SQL_CONFIG_DETAIL.PORT,
   database:SQL_CONFIG_DETAIL.DATABASE,
});

const query=(sql,params)=>{
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,connection))=>{
			if(err){
				reject(err);
			}else {
				connection.query(sql,params,(err,rows)=>{
					if(err) reject(err);
                    else
					  resolve(rows);
                    connection.release();
				})
			}
		}
	})
}

//创建用户表
const users=`create table if not exists t_users(
     FID INT NOT NULL AUTO_INCREMENT,
     FNAME VARCHAR(100) NOT NULL COMMENT '用户名',
     FREALNAME VARCHAR(100) NOT NULL DEFAULT 'realname' COMMENT '真实姓名',
     FPASSWORD VARCHAR(200) NOT NULL COMMENT '密码',
     FAVATOR VARCHAR(100) COMMENT '头像',
     FMOBILE VARCHAR(20) NOT NULL COMMENT '手机号码',
     FCREATTIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
     PRIMARY KEY(FID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

//创建计划表
const plan=`create table if not exists t_plan(
    FID INT NOT NULL AUTO_INCREMENT,
    FTYPE VARCHAR(20) NOT NULL DEFAULT 'DAY' COMMENT '计划类型',
    FUSERID INT NOT NULL COMMENT '用户id',
    FCREATTIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    FTITLE VARCHAR(100) COMMENT '计划标题',
    PRIMARY KEY(FID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

//计划明细表
const detial=`create table if not exists t_plan_detial(
    FID INT NOT NULL AUTO_INCREMENT,
    FCONTNET TEXT NOT NULL COMMENT '计划内容',
    FDETIALID INT NOT NULL COMMENT '计划ID',
    PRIMARY KEY(FID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

//计划类型
const planType=`create table if not exists t_plantype(
    FID INT NOT NULL AUTO_INCREMENT,
    FName VARCHAR(100) NOT NULL COMMENT '计划名称',
    FCREATTIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    FMARK TEXT COMMENT '备注',
    PRIMARY KEY(FID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8`;


const createTable=(sql)=>{
	return query(sql,[]);
}

//建表

createTable(users);
createTable(plan);
createTable(detial);
createTable(planType);


//注册
exports.register=(value)=>{
	const _sql="insert into t_users set FNAME=?,FPASSWORD=?,FMOBILE=?";
	return query(_sql,value)
}
//获取
exports.findPerson=(value)=>{
	const _sql="select * from t_users where FMOBILE=?";
	return query(_sql,value);
}
//删除用户
exports.delUser=(value)=>{
	const  _sql=`delete from t_users where FID=${value}`;
	return query(_sql,value);
}

//修改密码
exports.changePsw=(value)=>{
	const _sql=`update t_users set FPASSWORD=? where FMOBILE=?`;
	return query(_sql,value);
}

//获取计划列表分页

//新增计划
exports.addPaln=(value)=>{
	const _sql=`insert into t_plan(FTYPE,FUSERID,FTITLE) values(?,?,?) `;
	return query(_sql,value);
}


exports.addPlanDetial=(value)=>{
	const _sql=`insert into t_plan_detial(FCONTNET,FDETIALID) values(?,?)`;
	return query(_sql,value);
}

//新增计划类型
exports.newPlanType=(value)=>{
	const _sql=`insert into t_plantype(FNAME,FMARK) values(?,?)`;
	return query(_sql,value);
}

//获取计划类型列表
exports.getPlanTypeList=(value)=>{
	const _sql=`select * from t_plantype order by FCREATTIME limit ?,?`;
	return query(_sql,value)
}