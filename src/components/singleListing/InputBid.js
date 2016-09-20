import React, {PropTypes} from 'react';

const InputBid = ({listing, onBidSubmit, onBidChange}) => {
	return (
		<form className="form-inline" onSubmit={onBidSubmit}>
			<p><strong>Enter bid amount</strong></p>
			<div className="form-group">
				<div className="input-group">
					<div className="input-group-addon" style={styles.addon}>$</div>
						<input
							onChange={onBidChange}
							style={styles.inputForm}
							type="number"
							className="form-control"
							min={listing.highestBid.amount}
							step="0.01"
							placeholder={listing.highestBid.amount}
							required />
				</div>
				<button
					className="btn"
					role="button"
					style={styles.button}>
					<strong>BID</strong>
				</button>
			</div>
		</form>
	)
}

const styles = {
	inputForm: {
		height: 50,
		fontSize: 30
	},
	addon: {
		fontSize: 30,
		color: "#696969"
	},
	button :{
		margin: 20,
		borderWidth: 2,
		borderColor: "green",
		color: "green",
		background: "#fff",
		width: 100
	}
}

export default InputBid;
