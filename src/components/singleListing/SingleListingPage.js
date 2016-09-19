import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

class SingleListingPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {listing} = this.props;
		console.log ('listing:', listing)
		return (
			<div className="container-fluid">
				<div>
					<ProductImage image={listing.imageUrl}/>
					<ProductDetails listing={listing} />
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
