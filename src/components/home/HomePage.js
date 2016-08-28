import React, {Component} from 'react';

import LoginButton from './LoginButton';

class HomePage extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>hello</h1>
				<LoginButton />
			</div>
		);
	}
}

export default HomePage;
