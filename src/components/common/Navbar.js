import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import firebase from 'firebase';

import Avatar from 'material-ui/Avatar';

const Navbar = ({addListingModal, logout, user}) => {
	console.log ('user:', user)
	return (
		<nav className="navbar navbar-default navbar-fixed-top" style={styles.navbar}>
			<div className="container-fluid">
				<ul className="nav navbar-nav navbar-left">
					<li>
						<Link to="/home/profile" style={styles.profile}>
							<img src={user.photoURL} style={styles.photo}/>
							<span style={styles.displayName}>{user.displayName}</span>
						</Link>
					</li>
					<li>
						<a style={styles.profile}>
							<img src="http://www.mariowiki.com/images/d/d6/MKDS_Coin.gif" style={styles.photo}/>
							<span style={styles.displayName}>{user.coins}</span>
						</a>
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
	addListingModal: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
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

	},
	coins: {
		marginTop: 5
	}
};

export default Navbar;
