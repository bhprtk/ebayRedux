import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import UserCard from './UserCard';
import MyListings from './MyListings';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<UserCard
						user={this.props.user}/>
					<MyListings
						user={this.props.user}
						listings={this.props.listings}/>

				</div>
			</div>
		);
	}
}

ProfilePage.propTypes = {
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		listings: state.listings
	};
}


export default connect(mapStateToProps)(ProfilePage);
