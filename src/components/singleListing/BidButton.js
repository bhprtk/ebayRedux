import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import BidModal from './BidModal';

class BidButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.onClickBid = this.onClickBid.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	onClickBid() {
		this.setState({ showModal: true });
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	render() {
		const {listing} = this.props;
		return (
			<div>
				<a
					className="btn btn-success col-md-12 col-sm-12 col-xs-12"
					onClick={this.onClickBid}
					style={styles.button}>
					<h3>BID</h3>
				</a>

				<BidModal
					show={this.state.showModal}
					hide={this.hideModal}
					listing={listing}/>
			</div>
		);
	}
}

const styles = {
	button: {
		marginBottom: 20,
	}
}

export default BidButton;
