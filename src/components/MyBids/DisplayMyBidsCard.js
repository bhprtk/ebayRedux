import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const DisplayMyBidsCard = ({price, date, listing, user}) => {
	const {listedBy} = listing;
	console.log ('price:', price)
	console.log ('date:', date)
	console.log ('listing:', listing)
	console.log ('user:', user)
	return (
	<li className="list-group-item">
		<div className="media">
		  <div className="media-left">
	      <img src={listing.imageUrl} style={styles.image}/>
		  </div>
		  <div className="media-body">
		    <h4 className="media-heading">{listing.title}</h4>
		     <i>Bid {date}</i>
				 {price}
		  </div>
		</div>
	</li>
	);
};

const styles = {
	cardText: {
		color: '#696969'
	},
	image: {
		height: 100,
		width: 100
	}
}

export default DisplayMyBidsCard;
