import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import {LoginWrapper,LoginBox,Button,Input} from './style'
import {connect} from 'react-redux'
import {CreateAction} from './store'
class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		console.log(this.props)
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}
const mapStateToprops = (state) => ({
  loginStatus:state.getIn(['login','login'])
})
const mapDispathProps=(dispatch)=>({
   login(accountElm,passwordElm){
     console.log(accountElm.value);
     
     dispatch(CreateAction.login(accountElm.value,passwordElm.value))
   }

})
export default connect(mapStateToprops,mapDispathProps)(Login)