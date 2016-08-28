import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class LoginButton extends Component {
	constructor(props) {
		super(props);

		this.signIn = this.signIn.bind(this);
	}

	signIn() {
		const {actions} = this.props;
		actions.googleLogin()
		.then(() => console.log ('logged in:'))
			.catch(error => {
				console.log ('err:', err);
			})

	}

	render() {
		console.log ('this.props:', this.props)
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
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
