import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		console.log(this.props)
		if (loginStatus) {
			return (
		      <div>写文章页面</div>
			)
		}else {
			return <Redirect to='/login'/>
		}
	}
}
const mapStateToprops = (state) => ({
  loginStatus:state.getIn(['login','login'])
})

export default connect(mapStateToprops,null)(Login)