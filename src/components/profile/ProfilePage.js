import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import UserCard from './UserCard';
import MenuTabs from './MenuTabs';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">

				<div className="row">
					<div className="col-md-3 col-sm-4">
						<UserCard
							user={this.props.user}/>
					</div>
					<div className="col-md-9 col-sm-8">
						<MenuTabs />
						{this.props.children}
					</div>

				</div>
			</div>
		);
	}
}

ProfilePage.propTypes = {
	user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}


export default connect(mapStateToProps)(ProfilePage);
