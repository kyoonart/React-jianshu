import React, { PureComponent } from 'react';
import { DetailWapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { CreateAction } from './store';
import {withRouter} from 'react-router-dom'
class Detail extends PureComponent {
	render() {
		return (
			<div>
				<DetailWapper>
					<Header>罗志祥回应出轨：九年恋爱，输给慢性分手</Header>
					<Content>
						<img
							src="https://upload-images.jianshu.io/upload_images/6126137-18220176ce41a38e?imageMogr2/auto-orient/strip|imageView2/2/w/994/format/webp"
							alt=""
						/>
						<p>
							今天一大早，周扬青官宣，已经和罗志祥分手。 这段感情的破裂，似乎并不和平。 周扬青在宣告里细说了分手原因：从看手机发现对方出轨。
							爆料罗志祥每天晚上都会约不同的女生来家里。在一起9年，曾经留下过浪漫的点点滴滴。 也为对方付出过真心，舍弃过自我。 最后以闹剧收场，空留一地鸡毛9年恋情，终成闹剧
							时间拨回到9年前，周扬青还在微博上暗戳戳地秀恩爱。 微博被“某人”看到、请“某人”不要不开心了。热恋期间，两人做过不少甜蜜的事。 周扬青的微博，细数过种种他曾爱她的表现：
						</p>
						<p >
							一定也是真的爱过吧… 不然你怎么会排掉工作就为了陪我过重要的节日 从来不公开任何女友却愿意向大众公开介绍我 一个这么威风的狮子 甚至愿意让朋友觉得你怕我 你也为我做过很多很多浪漫的事
							对我的每一件事上心 有不开心的 难过的 都第一时间和我说 交往这么多年还是会每天都打电话 手机不离手 为我哭 也陪我笑” 但一直到今年1月份，两个人渐渐少了互动。
							最近的一次，停在了1月23日。
						</p>
					</Content>
				</DetailWapper>
					<DetailWapper>
				<div>
			<Header>{this.props.title}</Header>
			<Content dangerouslySetInnerHTML = {{ __html: this.props.content }}>
			</Content>
			</div>
			</DetailWapper>
			</div>
			
		);
	}
	componentDidMount() {
		console.log(this.props.match.params.id);
		
		this.props.getDetailData(this.props.match.params.id);
	}
}
const mapStateToprops = (state) => ({
	title: state.getIn([ 'detail', 'title' ]),
	content:state.getIn(['detail','content'])
});
const mapDispathProps= (dispatch) =>({
	getDetailData(id){
	dispatch(CreateAction.getDetailData(id))

	}
})
export default connect(mapStateToprops,mapDispathProps)(withRouter(Detail));
