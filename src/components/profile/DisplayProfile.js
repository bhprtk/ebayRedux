import React, {PropTypes} from 'react';

import Navbar from '../common/Navbar';

const DisplayProfile = ({user}) => {
	console.log ('user:', user)
	return (
		<div>
			<div className="container">
				<img src={user.photoURL} />
				<h4>{user.displayName}</h4>
			</div>
			<Navbar user={user}/>

		</div>
	);
};

DisplayProfile.propTypes = {
	user: PropTypes.object.isRequired
}

export default DisplayProfile;
