import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as bidActions from '../../actions/bidActions';
import {bindActionCreators} from 'redux';


import BidModal from './BidModal';

class BidButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.onBidSubmit = this.onBidSubmit.bind(this);
		this.onClickBid = this.onClickBid.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.onBidChange = this.onBidChange.bind(this);
	}

	onBidChange(e) {
		this.setState({currentBid: e.target.value});
	}

	onBidSubmit(e) {
		e.preventDefault();
		const {bidActions, listing, user} = this.props;
		const {currentBid} = this.state;
		const date = Date.now();

		bidActions.addBidToListing({listing, currentBid, user, date});
		this.setState({showModal: false});
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
				<button
					className="btn col-md-12 col-sm-12 col-xs-12"
					onClick={this.onClickBid}
					style={styles.button}>
					<h3>CLICK HERE TO BID</h3>
				</button>
				<BidModal
					show={this.state.showModal}
					hide={this.hideModal}
					listing={listing}
					onBidSubmit={this.onBidSubmit}
					onBidChange={this.onBidChange}/>
			</div>
		);
	}
}

const styles = {
	button: {
		marginBottom: 20,
		borderWidth: 4,
		borderColor: "#696969",
		// color: "green",
		background: "#f9f9f9",
		// background: "#558B2F",
		width: "100%"
	}
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		bidActions: bindActionCreators(bidActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BidButton);
