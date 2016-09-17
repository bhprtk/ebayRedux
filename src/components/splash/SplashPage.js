import React, {Component} from 'react';
import ParallaxComponent from 'react-parallax-component';

import LoginButton from './LoginButton';

class SplashPage extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div className="parallax">
					<div className="text-center" style={styles.outerDiv}>

						<h1>FIND THE BEST HEADPHONES</h1>
						<br/>
						<button className="btn btn-success" style={styles.searchBtn}>
							<h5>SEARCH HEADPHONES</h5>
						</button>
					</div>
				</div>
				<div>
					<h1 style={styles.innerDiv}>hello</h1>
				</div>
			</div>


		);
	}
}

const styles = {
	parallax: {
		height: '100vh',
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat'
	},
	innerDiv: {
		height: '100vh'
	},
	outerDiv: {
		color: '#fafafa',
		paddingTop: '30vh'
	},
	searchBtn: {
		borderColor: '#fff',
		borderWidth: 2,
		background: 'transparent',
		width: 250
	}
}

export default SplashPage;
