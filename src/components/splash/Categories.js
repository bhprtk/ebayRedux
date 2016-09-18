import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Categories = () => {
	return (
		<div style={styles.container}>
			<div className="container">
			<Card role="button" className="col-md-5 col-sm-5">
				<CardMedia>
					<img src="https://images-na.ssl-images-amazon.com/images/I/71l0KK5nMTL._SL1500_.jpg" />
				</CardMedia>
				<CardTitle
					title="WIRELESS"/>
			</Card>
			<Card role="button" className="col-md-5 col-sm-5 col-md-offset-2 col-sm-offset-2">
				<CardMedia>
					<img src="https://images-na.ssl-images-amazon.com/images/I/71l0KK5nMTL._SL1500_.jpg" />
				</CardMedia>
				<CardTitle
					title="WIRED"/>
			</Card>
		</div>
		</div>
	);
};

const styles = {
	container: {
		height: '100vh',
		paddingTop: 20,
		background: '#f9f9f9'
	}
}

export default Categories;
