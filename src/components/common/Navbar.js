import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import Avatar from 'material-ui/Avatar';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		const {addListingModal, hideListingModal} = this.props;

		return (
			<nav className="navbar navbar-default" style={styles.navbar}>
				<div className="container-fluid">
					<ul className="nav navbar-nav navbar-left">
						<li>
							<Link to="/profile" style={styles.profile}>
								<img src={this.props.user.photoURL} style={styles.photo}/>
								<span style={styles.displayName}>{this.props.user.displayName}</span>
							</Link>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
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
								onClick={hideListingModal}>
								Hide Modal
							</a>
						</li>
						<li>
							<a href="#">
								hello
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
	hideListingModal: PropTypes.func.isRequired
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
