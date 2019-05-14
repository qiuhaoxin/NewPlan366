import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import {isEmpty} from '../../../Utils';
import {connect} from 'react-redux';
import {Header,ChartView} from 'plan366component';
import {BarChartCard} from 'aicomponents';

class Login extends Component{
	constructor(props){
		super(props);
    this.data = [{
    year: '1951 年',
    sales: 38
  }, {
    year: '1952 年',
    sales: 52
  }, {
    year: '1956 年',
    sales: 61
  }, {
    year: '1957 年',
    sales: 145
  }, {
    year: '1958 年',
    sales: 48
  }, {
    year: '1959 年',
    sales: 38
  }, {
    year: '1960 年',
    sales: 38
  }, {
    year: '1962 年',
    sales: 38
  }];
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
                <Header />
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
                  <BarChartCard data={this.data}/>
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