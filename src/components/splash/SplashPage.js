import React, {Component} from 'react';

import LoginButton from './LoginButton';

class SplashPage extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>trade this</h1>
				<LoginButton />
			</div>
		);
	}
}

export default SplashPage;
