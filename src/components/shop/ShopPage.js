import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Masonry from 'react-masonry-component';

import * as shopActions from '../../actions/shopActions';
// import DisplayShop from './DisplayShop';
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
				<div key={index} className="col-md-6 col-xs-6 col-sm-6">
					<DisplayShopCard
						shop={shop}
						onClickBuy={this.onClickBuy}
						user={user} />
					<BuyShopModal
						show={this.state.showModal}
						hide={this.hideModal}
						shop={shop}
						user={user} />
				</div>
			);
		});
		const masonryOptions = {
			transitionDuration: 5
		};
		return (
			<div className="container">
				<Masonry options={masonryOptions}>
					{displayShops}
				</Masonry>
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
