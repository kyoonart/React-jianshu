import * as constants from './constants';
// immutable 库 确保state 不会被修改
import { fromJS } from 'immutable';
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
  articlePage:1,
  showScroll:true 
});
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			});
		case constants.ADD_ARTICLE_LIST:
			return state.merge({
        "articleList": state.get('articleList').concat(action.list),
        "articlePage":action.nextPage
      });
		case constants.TOGGLE_TOP_SHOW: return state.get('showScroll',action.show);
		default: return state; 
	}
};
