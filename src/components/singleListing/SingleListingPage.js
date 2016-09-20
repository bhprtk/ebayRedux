import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as listingActions from '../../actions/listingActions';

import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

class SingleListingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listing: null
		}
	}

	componentWillMount() {
		const {listingActions} = this.props;
		const {listingId} = this.props.params;
		listingActions.getListingById(listingId);
	}

	render() {
		const {listing} = this.props;
		if(listing) {
			return (
				<div className="container-fluid">
					<div>
						<ProductImage image={listing.imageUrl}/>
						<ProductDetails listing={listing} />
					</div>
				</div>
			)
		} else {
			return (
				<h1>Loading...</h1>
			)
		}
	}
}

function mapStateToProps(state, ownProps) {
	return {
		listing: state.listingById
	};
}

function mapDispatchToProps(dispatch) {
	return {
		listingActions: bindActionCreators(listingActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleListingPage);
