import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const DisplayMyShopsCard = ({shop}) => {
	return (
		<Card style={styles.card} className="col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
			<CardHeader />
			<CardMedia>
				<img src={shop.imageUrl} />
			</CardMedia>
			<CardTitle
				title={shop.title}
				subtitle={shop.price} />
			<CardText style={styles.cardText}>
				{shop.description}
			</CardText>
		</Card>
	);
};

const styles = {
	card: {
		margin: 20
	},
	cardText: {
		color: '#696969'
	}
}

export default DisplayMyShopsCard;
