import React, {Component} from 'react';

import ListingModal from './ListingModal';

class BidButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.showModal = this.showModal.bind(this);
		this.hideListingModal = this.hideListingModal.bind(this);
	}

	showModal() {
		console.log ('this.props.currentListing:', this.props.currentListing)
		this.setState({ showModal: true });
	}

	hideListingModal() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div>
				<button
					className="btn btn-block btn-large"
					style={styles.bidButton}
					onClick={this.showModal}>
					<h4>
						BID
					</h4>
				</button>

				<ListingModal
					show={this.state.showModal}
					hide={this.hideListingModal}
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
}

export default BidButton;
