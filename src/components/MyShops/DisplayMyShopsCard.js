import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const DisplayMyShopsCard = ({shop, list}) => {
	const price = (
		<Chip style={styles.chip}>
			<Avatar src="http://altcoindb.com/images/mariobroscoin.png" />
			<strong style={styles.priceText}>{shop.price}</strong>
		</Chip>
	);
	return (
		<Card style={styles.card} className="col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
			<CardHeader />
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
				<button className="btn btn-info" data-what="this" onClick={list}>
					List
				</button>
			</CardActions>
		</Card>
	);
};

const styles = {
	card: {
		margin: 20
	},
	cardText: {
		color: '#696969'
	},
	priceText: {
		fontSize: 24,
		color: '#696969'
	},
	chip: {
		background: '#fff'
	}
}

export default DisplayMyShopsCard;
