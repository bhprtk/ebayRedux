import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listingActions from '../../actions/listingActions';

import DisplayListings from './DisplayListings';

class ListingsPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<DisplayListings
					user={this.props.user}
					listings={this.props.listings}/>
			</div>
		);
	}
}

ListingsPage.propTypes = {
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		listings: state.listings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		listingActions: bindActionCreators(listingActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);
