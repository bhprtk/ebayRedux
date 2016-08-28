import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class ProfilePage extends Component {
	render() {
		console.log ('this.props:', this.props)
		return (
			<h1>profile page</h1>
		)
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
