import React, {  PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopWrapper, TopicItem } from '../style';
class TopIc extends  PureComponent {
	render() {
		const { list } = this.props;
		return (
			<div>
				<TopWrapper>
					 {list.map((item) => {
						return (
							<TopicItem key={item.get('id')}>
								<img className='topic-pic' src={item.get('imgUrl')} alt="233" />
								{item.get('title')}
							</TopicItem>
						);
					})}
				</TopWrapper>
			</div>
		);
	}
}
const mapStateToprops = (state) => ({
	list: state.getIn(['home',"topicList"])
});
export default connect(mapStateToprops, null)(TopIc);
