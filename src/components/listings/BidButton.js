import React, {Component} from 'react';

class BidButton extends Component {
	constructor(props) {
		super(props);

		this.showModal = this.showModal.bind(this);
	}

	showModal() {
		console.log ('this.props.currentListing:', this.props.currentListing)
	}

	render() {
		return (
			<button
				className="btn btn-block btn-large"
				style={styles.bidButton}
				onClick={this.showModal}>
				<h4>
					BID
				</h4>
			</button>
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
