import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import NotEnoughCoinsModal from './NotEnoughCoinsModal';
import NotEnoughRemainingModal from './NotEnoughRemainingModal';

class DisplayShopCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showNotEnoughCoinsModal: false,
			showNotEnoughRemainingModal: false
		}

		this.onClickBuy = this.onClickBuy.bind(this);
		this.hideNotEnoughCoinsModal = this.hideNotEnoughCoinsModal.bind(this);
		this.hideNotEnoughRemainingModal = this.hideNotEnoughRemainingModal.bind(this);
	}

	onClickBuy() {
		const {shop, user} = this.props;
		if(user.coins < shop.price) { // replace the sign
			this.setState({ showeNotEnoughCoinsModal: true });
		} else if(shop.remaining <= 0) { // replace the sign
			this.setState({ showNotEnoughRemainingModal: true })
		} else {
			console.log ('this.props:', this.props)
		}
	}

	hideNotEnoughCoinsModal() {
		this.setState({ showNotEnoughCoinsModal: false });
	}

	hideNotEnoughRemainingModal() {
		this.setState({ showNotEnoughRemainingModal: false });
	}

	render() {
		const {shop, onClickBuy} = this.props;
		const image = "http://altcoindb.com/images/mariobroscoin.png";
		const price = (
			<Chip style={styles.chip}>
				<Avatar src="http://altcoindb.com/images/mariobroscoin.png" />
				<strong style={styles.priceText}>{shop.price}</strong>
			</Chip>
		);

		const remaining = (
			<h3 style={styles.remaining}>Remaining: {shop.remaining}</h3>
		)

		return (
			<div>
				<Card className="col-md-6 col-xs-6 col-sm-6">
					<CardHeader
						title={remaining}/>
					<CardMedia>
						<img src={shop.imageUrl} />
					</CardMedia>
					<CardTitle
						title={shop.title}
						subtitle={price} />
					<CardText style={styles.cardText}>
						{shop.description}
					</CardText>
					<CardActions>
						<button
							className="btn btn-success btn-block btn-lg"
							onClick={this.onClickBuy}>
							BUY
						</button>
					</CardActions>
				</Card>

				<NotEnoughCoinsModal
					show={this.state.showNotEnoughCoinsModal}
					hide={this.hideNotEnoughCoinsModal}/>

				<NotEnoughRemainingModal
					show={this.state.showNotEnoughRemainingModal}
					hide={this.hideNotEnoughRemainingModal}
					shopTitle={shop.title}/>
			</div>
		);

	}
}

const styles = {
	cardText: {
		color: '#696969'
	},
	coinImage: {
		height: 25,
		width: 25
	},
	priceText: {
		fontSize: 24,
		color: '#696969'
	},
	chip: {
		background: '#fff'
	},
	remaining: {
		color: '#696969'
	}
};

export default DisplayShopCard;
