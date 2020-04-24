import * as constants from './constants';
// immutable 库 确保state 不会被修改
import { fromJS } from 'immutable';
const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
});
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			// return state.set('list', action.data).set('totalPage', action.totalPage);
			// 这里也可以写成merge 性能更高
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_IN:
			return state.set('mouseIn', true);
		case constants.MOUSE_OUT:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
};
