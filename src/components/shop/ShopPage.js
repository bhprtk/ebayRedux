import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as shopActions from '../../actions/shopActions';
import DisplayShop from './DisplayShop';

class ShopPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {shopActions} = this.props;
		shopActions.getAllShops();
	}

	render() {
		console.log ('this.props.shops:', this.props.shops)
		return (
			<div>
				<DisplayShop shops={this.props.shops}/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shops: state.shops
	};
}

function mapDispatchToProps(dispatch) {
	return {
		shopActions: bindActionCreators(shopActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
