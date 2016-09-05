import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import UserCard from './UserCard';
import DisplayMyListings from './DisplayMyListings';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-3">
						<UserCard
							user={this.props.user}/>
					</div>
					<div className="col-md-9 col-sm-9">
						<DisplayMyListings
							user={this.props.user}
							listings={this.props.listings}/>
					</div>

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
