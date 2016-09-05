import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as userActions from '../../actions/userActions';

class LoginButton extends Component {
	constructor(props) {
		super(props);

		this.signIn = this.signIn.bind(this);
	}

	signIn() {
		const {userActions} = this.props;
		userActions.googleLogin()
			.then(() => {
				browserHistory.push("/home");
			});

	}

	render() {
		return (
			<div>
				<button
					className="btn btn-default"
					onClick={this.signIn}>
					<span className="fa fa-google"></span> Sign In with Google
				</button>
			</div>
		);
	}
}

LoginButton.propTypes = {
	userActions: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
