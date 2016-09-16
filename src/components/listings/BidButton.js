import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import * as listingActions from '../../actions/listingActions';
import ListingModal from './ListingModal';

class BidButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.showModal = this.showModal.bind(this);
		this.hideListingModal = this.hideListingModal.bind(this);
		this.priceChange = this.priceChange.bind(this);
		this.submitBid = this.submitBid.bind(this);
		this.navigateToCurrentListing = this.navigateToCurrentListing.bind(this);
	}

	navigateToCurrentListing() {
		const {listingActions} = this.props;
		listingActions.getListingById(this.props.currentListing._id)
			.then(() => {
				const path = `/home/singleListing/${this.props.currentListing._id}`
				browserHistory.push(path);
			})
			.catch(err => console.log ('err:', err))
	}

	showModal() {
		this.setState({ showModal: true });
	}

	hideListingModal() {
		this.setState({ showModal: false });
	}

	priceChange(e) {
		this.setState({
			bidAmount: e.target.value
		})
	}

	submitBid(e) {
		e.preventDefault();
		this.props.listingActions.addBidToListing(this.props.currentListing, this.state.bidAmount);
	}

	render() {
		return (
			<div>
				{/*<button
					className="btn btn-block btn-large"
					style={styles.bidButton}
					onClick={this.showModal}>
					<h4>
						BID
					</h4>
				</button>*/}
				<button
					className="btn btn-block btn-large"
					style={styles.bidButton}
					onClick={this.navigateToCurrentListing}>
					BID
				</button>

				<ListingModal
					show={this.state.showModal}
					hide={this.hideListingModal}
					listing={this.props.currentListing}
					submitBid={this.submitBid}
					priceChange={this.priceChange}
					/>
			</div>
		);
	}
}

const styles = {
	bidButton: {
		background: '#66BB6A',
		borderColor: '#66BB6A',
		color: '#fff'
	}
};

function mapStateToProps(state, ownProps) {
	return {
		listings: state.listings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		listingActions: bindActionCreators(listingActions, dispatch)
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(BidButton);
