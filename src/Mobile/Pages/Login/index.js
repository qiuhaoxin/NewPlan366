import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import {isEmpty} from '../../../Utils';
import {connect} from 'react-redux';
import {NumberOneCard} from 'aicomponents';

class Login extends Component{
	constructor(props){
		super(props);
    this.cardData={
         title:'金蝶云2月份的续费率',
         cardType:'two',
         bodyData:[
            [{key:'苍穹',value:'50%',id:0},{key:'星空',value:'70%',id:1}],
         ],
         updateTime:'2018.09.01',
    }
	}
	state={
        phonenum:'',
        psw:'',
        captcha:'',
	}
  componentDidMount(){
    
  }
	handleInputChange=(e,key)=>{
       this.setState({
       	 [key]:e.target.value,
       })
	}
  validate=()=>{
      const {phonenum,psw,captcha}=this.state;
      if(isEmpty(phonenum)){
        return false;
      }
      if(isEmpty(psw)){
        return false;
      }
      if(isEmpty(captcha)){
        return false;
      }
      return true;
  }
  handleLogin=(e)=>{
     const {phonenum,psw,captcha}=this.state;
     const result=this.validate();
    // const {loginAPI}=this.props;
     if(!result)return;
     //登录
    // loginAPI({phonenum,psw,captcha});

  }
  handleRegister=()=>{
      this.props.history.push('/register');
  }
  handleResetPsw=()=>{
  
  }
	render(){
		return (
            <div className={Styles.wrapper}>
                <div className={Styles.innerWrapper}>
                  <div className={Styles.row}>
                     <label>电话:</label>
                     <input placeholder={"请输入电话号码"} onChange={(e)=>this.handleInputChange(e,'phonenum')}/>
                  </div>
                  <div className={Styles.row}>
                     <label>密码:</label>
                     <input placeholder={"请输入密码"} onChange={(e)=>this.handleInputChange(e,'psw')}/>
                  </div>
                  <div className={Styles.row} style={{border:'none'}}>
                     <input placeholder="请输入验证码" onChange={(e)=>this.handleInputChange(e,'captcha')} /><img style={{width:'200px',height:'80px'}} src={'http://localhost:8099/user/getcaptcha'}/>
                  </div>
                  <div className={Styles.forgetRow}>
                     <label className={Styles.left} onClick={this.handleRegister}>没有用户？注册</label>
                     <label className={Styles.right} onClick={this.handleResetPsw}>忘记密码</label>
                  </div>
                  <NumberOneCard data={this.cardData} desc={'数据找到啦'}></NumberOneCard>
                </div>
            </div>
		)
	}
}
// const wrapperFunc=(payload,func,dispatch)=>{
//    if(typeof func=='function'){
//      return func(payload)(dispatch);
//    }
// }
// const mapStateToProps=(state)=>{
//   return {
     
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     loginAPI:(payload)=>wrapperFunc(payload,LoginAction,dispatch)
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
// 
export default connect((state)=>({
     userName:'',
     password:'',
}))(Login);


/**
 *
 * <Button type='primary' styleObj={{width:'100%',marginTop:'20px',marginLeft:0,padding:'20px'}} onClick={this.handleLogin}>登录</Button>
 */