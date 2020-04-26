import * as constants from './constants';
// immutable 库 确保state 不会被修改
import { fromJS } from 'immutable';
const defaultState = fromJS({
 title:"",
 content:''
});
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.GET_DETAIL_DATA : return state.merge({
			title:fromJS(action.title),
			content:fromJS(action.content)
		});
		default: return state; 
	}
};
