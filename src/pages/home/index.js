import React, { PureComponent } from 'react';
import TopIc from './components/TopIc.js';
import List from './components/List.js';
import Recommed from './components/Recommed.js';
import Writer from './components/Writer.js';
import { HomeWapper, HomeRight, HomeLeft, BackTop } from './style';
import { connect } from 'react-redux';
import { CreateAction } from './store/index';
class Home extends  PureComponent {
	handleBackTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<HomeWapper>
					<HomeLeft>
						<img
							className="banner-img"
							src="https://upload-images.jianshu.io/upload_images/6126137-b875c763bdaa0006?imageMogr2/auto-orient/strip|imageView2/2/w/994/format/webp"
							alt="233"
						/>
						<TopIc />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommed />
						<Writer />
					</HomeRight>
				</HomeWapper>
				{this.props.showScroll ? <BackTop onClick={this.handleBackTop}>回到顶部</BackTop> : ''}
			</div>
		);
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	 componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
      // window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapStateToprops = (state) => ({
   showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispathProps = (dispatch) => ({
	changeHomeData() {
		const action = CreateAction.getHomeInfo();
		dispatch(action);
	},
	
	 changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(CreateAction.toggleTopShow(true));
        } else {
            dispatch(CreateAction.toggleTopShow(false));
        }
    }
});
export default connect(mapStateToprops, mapDispathProps)(Home);
