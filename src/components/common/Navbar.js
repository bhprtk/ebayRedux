import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import firebase from 'firebase';

import Avatar from 'material-ui/Avatar';

const Navbar = ({addListingModal, logout, user}) => {
	return (
		<nav className="navbar navbar-default" style={styles.navbar}>
			<div className="container-fluid">
				<ul className="nav navbar-nav navbar-left">
					<li>
						<Link to="/home/profile" style={styles.profile}>
							<img src={user.photoURL} style={styles.photo}/>
							<span style={styles.displayName}>{user.displayName}</span>
						</Link>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to="/home/listings">
							Display Listings
						</Link>
					</li>
					<li>
						<a
							role="button"
							onClick={addListingModal}>
							Add Listing
						</a>
					</li>
					<li>
						<a
							role="button"
							onClick={logout}>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}


Navbar.propTypes = {
	user: PropTypes.object.isRequired,
	addListingModal: PropTypes.func.isRequired
};

const styles = {
	photo: {
		height: 30,
		width: 30
	},
	displayName: {
		paddingLeft: 10
	},
	navbar: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	profile: {

	}
};

export default Navbar;
