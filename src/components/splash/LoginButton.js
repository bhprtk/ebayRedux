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
				browserHistory.push("/home/listings");
			});

	}

	render() {
		return (
			<div>
				<a
					role="button"
					className="btn btn-success"
					onClick={this.signIn}
					style={styles.searchBtn}>
					<span className="fa fa-google"></span> Sign In with Google
				</a>
			</div>
		);
	}
}

const styles = {
	searchBtn: {
		borderColor: '#fff',
		borderWidth: 2,
		background: 'transparent',
		width: 250
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
