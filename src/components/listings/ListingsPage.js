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

		this.showModal = this.showModal.bind(this);
	}

	showModal(e) {
		console.log ('e.target.dataset.index:', e.target.dataset.index)
		console.log ('here:');
	}

	hideListingModal() {
		this.setstate({ showModal: false });
	}

	render() {
		return (
			<div>
				<DisplayListings
					listings={this.props.newListings}
					showModal={this.showModal}/>

				{/*<ListingModal
					show={this.state.showModal}
					hide={this.hideListingModal}/>*/}
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
