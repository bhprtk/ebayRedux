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
					listings={this.props.newListings}/>
			</div>
		);
	}
}

ListingsPage.propTypes = {
	user: PropTypes.object.isRequired,
	newListings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		newListings: state.newListings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		listingActions: bindActionCreators(listingActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);
