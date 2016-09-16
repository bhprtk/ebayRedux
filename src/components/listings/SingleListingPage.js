import React, {Component, PropTypes} from 'react';

class SingleListingPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log ('this.props:', this.props)
		return (
			<h1>SingleListingPage</h1>
		)
	}
}

export default SingleListingPage;
