import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWapper,
	SearchInfo,
	SearchSwitch,
	SearchTitle,
	SearchItem
} from './style';
import { IconfontStyle } from '../../static/iconfont/iconfont'; //图标库
import { CSSTransition } from 'react-transition-group'; // 动画库
import { connect } from 'react-redux'; //连接 store
import { CreateAction } from './store/index.js';
// 无状态组件的性能更高
class Header extends Component {
	getItemLists() {
		const { page } = this.props;
		const newlist = this.props.list.toJS();
		const pageList = [];
		if (newlist.length) {
			for (let index = (page - 1) * 10; index < page * 10; index++) {
				pageList.push(<SearchItem key={index}>{newlist[index]}</SearchItem>);
			}
		}
		if (this.props.focused || this.props.mouseIn) {
			return (
				<SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
					<SearchTitle>
						热门搜索
						<SearchSwitch
							onClick={() => {
								this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon);
							}}
						>
							<i
								ref={(icon) => {
									this.spinIcon = icon;
								}}
								className="iconfont spin"
							>
								&#xe865;
							</i>
							换一批
						</SearchSwitch>
					</SearchTitle>
					<div>{pageList}</div>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}
	render() {
		return (
			<HeaderWrapper>
				<IconfontStyle />
			<Link to='/'><Logo/></Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200} //动画时间
							classNames="slide"
						>
							<NavSearch
								onFocus={()=>{this.props.handleonFocus(this.props.list)}}
								onBlur={this.props.handleonBlur}
								className={this.props.focused ? 'focused' : ''}
							/>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont zoom ' : 'iconfont zoom'}>&#xe647;</i>
						{this.getItemLists()}
					</SearchWapper>
				</Nav>
				<Addition>
					<Button className="writting">
						<i className="iconfont pencil">&#xe617;</i>写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		page: state.get('header').get('page'),
		totalPage: state.get('header').get('totalPage'),
		mouseIn: state.get('header').get('mouseIn')
	};
};
const mapDispathProps = (dispatch) => {
	return {
		handleonFocus(list) {
			(list.size===0)&&dispatch(CreateAction.getList());
			dispatch(CreateAction.search_focus());
		},
		handleonBlur() {
			dispatch(CreateAction.search_blur());
		},
		handleMouseEnter() {
			dispatch(CreateAction.mouseIn());
		},
		handleMouseLeave() {
			dispatch(CreateAction.mouseOut());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
			console.log(originAngle);
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform='rotate('+(originAngle+360)+'deg)'
			if (page < totalPage) {
				dispatch(CreateAction.changePage(page + 1));
			} else {
				dispatch(CreateAction.changePage(1));
			}
			// dispatch(CreateAction)
		}
	};
};
export default connect(mapStateToProps, mapDispathProps)(Header);
