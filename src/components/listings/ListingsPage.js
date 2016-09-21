import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listingActions from '../../actions/listingActions';

import DisplayListings from './DisplayListings';
import ListingModal from './ListingModal';

class ListingsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	componentWillMount() {
		const {listingActions} = this.props;
		listingActions.getAllListings();
	}

	render() {
		return (
			<div>
				<DisplayListings
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
