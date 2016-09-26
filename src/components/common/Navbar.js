import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import firebase from 'firebase';
import * as shopActions from '../../actions/shopActions';


import Avatar from 'material-ui/Avatar';

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.navigateToShop = this.navigateToShop.bind(this);
	}

	navigateToShop() {
		const {shopActions} = this.props;
		shopActions.getAllShops()
			.then(() => {
				const path = `/home/shop`;
				browserHistory.push(path);
			})
	}

	render() {
		const {addListingModal, logout, user} = this.props
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
							<a role="button" onClick={this.navigateToShop}>
								Shop
							</a>
						</li>
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

function mapStateToProps(state, ownProps) {
	return {

	};
}

function mapDispatchToProps(dispatch) {
	return {
		shopActions: bindActionCreators(shopActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
