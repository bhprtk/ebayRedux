import React, {Component} from 'react';

import Avatar from 'material-ui/Avatar';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
					<ul className="nav navbar-nav navbar-brand">
						<li>
							<a href="#">auctionThis</a>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="#">
								<Avatar
									src={this.props.user.photoURL}
									size={60}
									/>
								<span style={styles.displayName}>{this.props.user.displayName}</span>
							</a>
						</li>
					</ul>
			  </div>
			</nav>
		);
	}
}

const styles = {
	photo: {
		height: 50,
		width: 50
	},
	displayName: {
		paddingLeft: 10
	}
}

export default Navbar;
