import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const UserCard = ({user}) => {
	return (
		<Card>
		 <CardMedia>
			 <img src={user.photoURL} />
		 </CardMedia>
		 <CardTitle
			 title={user.displayName}
			 subtitle={user.email} />
	 </Card>
 );
};

UserCard.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserCard;
