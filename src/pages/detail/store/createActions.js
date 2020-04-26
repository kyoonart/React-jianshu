import axios from 'axios';
import * as constants from './constants';
export const getDetailData = (id) => {
	return (dispatch) => {
		axios
			.get('/api/detail.json?id='+id)
			.then((res) => {
				const result = res.data.data;
				const action = {
					type: constants.GET_DETAIL_DATA,
				 title:result.title,
				 content: result.content
				};
				dispatch(action);
			})
			.catch(() => {
				console.log('error');
			});
	};
};
