import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';


class SingleListingPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>SingleListingPage</h1>
				<div className="col-md-4 col-sm-4">
					<h1>singleListing</h1>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		listing: state.listingById
	}
}

export default connect(mapStateToProps)(SingleListingPage);
