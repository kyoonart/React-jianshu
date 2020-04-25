import React, {  PureComponent } from 'react';
import { RecommedWraper, RecommedItem,ContantMe } from '../style';
import { connect } from 'react-redux';
class Recommed extends  PureComponent {
	render() {
		return (
			<RecommedWraper>
				{this.props.recommendList.map((item) =>{
					return <div key={item.get('id')}>
							<RecommedItem imgUrl= {item.get('imgUrl')} />
						</div>
				})}
				<ContantMe>
	<img className='icon' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="233"/>
				<div className='info'>
			  <h3 className='download'>下载简书手机App ></h3>
				<p className='view'>随时随地发现和创作内容</p>
				</div>
				</ContantMe>
			</RecommedWraper>
		);
	}
}
const mapStateToprops = (state) => ({
	recommendList: state.get('home').get('recommendList')
});

export default connect(mapStateToprops)(Recommed);
