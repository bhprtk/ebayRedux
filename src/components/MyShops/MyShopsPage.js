import React, {Component} from 'react';
import { connect } from 'react-redux';

import DisplayMyShops from './DisplayMyShops';

class MyShopsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { shops } = this.props.user;
		return (
			<div>
				<DisplayMyShops
					shops={shops}/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(MyShopsPage);
