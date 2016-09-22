import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as bidActions from '../../actions/bidActions';
import DisplayMyBids from './DisplayMyBids';

class MyBidsPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {user, bidActions} = this.props;
		bidActions.getBidsByUser(user._id);
	}

	render() {
		console.log ('this.props.myBids:', this.props.myBids)
		return (
			<div>
				<DisplayMyBids bids={this.props.myBids}/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		myBids: state.myBids
	};
}

function mapDispatchToProps(dispatch) {
	return {
		bidActions: bindActionCreators(bidActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBidsPage);
