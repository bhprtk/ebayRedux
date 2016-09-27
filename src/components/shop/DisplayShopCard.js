import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const DisplayShopCard = ({shop, onClickBuy}) => {
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
					onClick={onClickBuy}>
					BUY
				</button>
			</CardActions>
		</Card>
	);
};

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
