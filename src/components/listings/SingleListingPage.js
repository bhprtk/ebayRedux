import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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

function mapStateToProps(state, ownProps) {
	return {
		listing: state.listingById
	}
}

export default connect(mapStateToProps)(SingleListingPage);
