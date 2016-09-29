import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as shopActions from '../../actions/shopActions';
import DisplayShop from './DisplayShop';
import BuyShopModal from './BuyShopModal';
import DisplayShopCard from './DisplayShopCard';

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
		const {shops, user} = this.props;
		const displayShops = shops.map((shop, index) => {
			return (
				<div key={index} className="container">
					<DisplayShopCard
						shop={shop}
						onClickBuy={this.onClickBuy} />
					<BuyShopModal
						show={this.state.showModal}
						hide={this.hideModal}
						shop={shop}
						user={user} />
				</div>
			);
		});
		return (
			<div>
				{displayShops}
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
