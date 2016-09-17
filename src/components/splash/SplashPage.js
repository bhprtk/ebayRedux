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
			<div>
				<Parallax
					scrollDown={this.scrollDown}/>
				<Categories />
			</div>


		);
	}
}

const styles = {

}

export default SplashPage;
