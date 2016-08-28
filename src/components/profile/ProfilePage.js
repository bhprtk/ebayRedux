import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import DisplayProfile from './DisplayProfile';
import Navbar from '../common/Navbar';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {user} = this.props;
		return (
			<Navbar user={user}/>
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
