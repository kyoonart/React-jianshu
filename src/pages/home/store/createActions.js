import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';
export const getHomeInfo = () => {
	return (dispatch) => {
		axios
			.get('/api/home.json')
			.then((res) => {
				const result = res.data.data;
				const action = {
					type: constants.CHANGE_HOME_DATA,
					topicList: result.topicList,
					articleList: result.articleList,
					recommendList: result.recommendList
				};
				dispatch(action);
			})
			.catch(() => {
				console.log('error');
			});
	};
};
const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
});
export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	};
};
export const toggleTopShow=(show)=>({
  type:constants.TOGGLE_TOP_SHOW,
  show
})