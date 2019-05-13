import React,{Component} from 'react';

export default function asyncComponent(importComponent){
	class AsysnComponent extends Component{
		constructor(props){
			super(props);
		}
		state={
			component:null,
		}
		async componentDidMount(){
			const {default:component}=await importComponent();
			this.setState({
				component,
			})
		}
		render(){
			const MyComponent=this.state.component;
			return MyComponent ? <MyComponent /> : null;
		}
	}
	return AsysnComponent;
}