import React, {Component} from 'react';
import ParallaxComponent from 'react-parallax-component';
import Scroll from 'react-scroll';

import LoginButton from './LoginButton';
import Parallax from './Parallax';
import Categories from './Categories';

class SplashPage extends Component {

	constructor() {
		super();

		this.scrollDown = this.scrollDown.bind(this);
	}

	scrollDown() {
		Scroll.animateScroll.scrollTo(750, {
		  duration: 500,
		  smooth: true
		});
	}

	render() {
		return (
			<div
				className="text-center"
				style={styles.container}>
				<div>
					<p className="title">AUCTION THIS</p>
					<br/>
					<LoginButton />
				</div>
			</div>


		);
	}
}

const styles = {
	container: {
		height: "105vh",
		background: "#37474F",
		color: "#f9f9f9",
		marginTop: "-20px",
		paddingTop: "30vh"
	},
	titleDiv: {
		background: "#455A64",
		height: 100
	},
	// title: {
	// 	fontSize: 64,
	// 	fontFamily: 'Passion One', 'cursive',
	// 	// fontFamily: 'Acme', 'sans-serif',
	// 	// fontFamily: 'Luckiest Guy', 'cursive',
	// 	// fontFamily: 'Paytone One',
	// }
}

export default SplashPage;
