import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as shopActions from '../../actions/shopActions';
import DisplayShop from './DisplayShop';
import BuyShopModal from './BuyShopModal';

class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.onClickBuy = this.onClickBuy.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	componentWillMount() {
		const {shopActions} = this.props;
		shopActions.getAllShops();
	}

	onClickBuy() {
		this.setState({ showModal: true })
	}

	hideModal() {
		this.setState({ showModal: false })
	}

	render() {
		return (
			<div>
				<DisplayShop
					shops={this.props.shops}
					onClickBuy={this.onClickBuy}
					showModal={this.state.showModal}
					hideModal={this.hideModal}
					user={this.props.user} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		shops: state.shops,
		user: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		shopActions: bindActionCreators(shopActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
