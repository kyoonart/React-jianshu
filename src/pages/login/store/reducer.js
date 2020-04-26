import * as constants from './constants';
// immutable 库 确保state 不会被修改
import { fromJS } from 'immutable';
const defaultState = fromJS({
	login:false
});
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_LOGIN: return state.set('login',action.value);
		case constants.LOGOUT: return state.set('login',action.value);
		default: return state; 
	}
};
 