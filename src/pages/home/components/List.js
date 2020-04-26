import React, {  PureComponent } from 'react';
import { ListItem, ListInfo,LoadMore} from '../style';
import { connect } from 'react-redux';
import {CreateAction} from '../store'
import {Link} from 'react-router-dom'
class List extends  PureComponent {
	render() {
		const { articleList,getMoreList,page} = this.props;
		return (
			<div>
				{articleList.map((item) => {
					return (
					<Link  key={item.get('id')} to={'/detail/'+item.get('id')}>
						<ListItem>
							<div>
								<img className="pic" src={item.get('imgUrl')} alt="233" />
							</div>
							<ListInfo>
								<h3 className="title">{item.get('title')}</h3>
								<p className="desc">{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
						</Link>
					);
				})}
        <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
			</div>
		);
	}
}
const mapStateToprops = (state) => ({
	articleList: state.getIn(['home','articleList']),
	page: state.getIn(['home',"articlePage"])
})
const mapDispatchToprops=(dispatch)=>({
  getMoreList(page){
    dispatch(CreateAction.getMoreList(page))
  }
})
export default connect(mapStateToprops, mapDispatchToprops)(List);
