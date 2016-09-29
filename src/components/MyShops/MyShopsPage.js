import React, {Component} from 'react';
import { connect } from 'react-redux';

class MyShopsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { shops } = this.props.user;
		return (
			<h1>MyShopsPage</h1>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(MyShopsPage);
