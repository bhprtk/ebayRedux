import React, {Component} from 'react';
import { connect } from 'react-redux';

import DisplayMyShops from './DisplayMyShops';
import DisplayMyShopsCard from './DisplayMyShopsCard';
import AddListingModal from './AddListingModal';

class MyShopsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.list = this.list.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	list(e) {
		console.log ('e.target.dataset.shopid:', e.target.dataset.shopid)
		// this.setState({showModal: true});

	}

	hideModal() {
		this.setState({showModal: false});
	}

	render() {
		const { shops } = this.props.user;
		let displayShops;
		if(shops){
			displayShops = shops.map((shop, index) => {
				return (
					<DisplayMyShopsCard
						shop={shop}
						key={index}
						list={this.list}
						show={this.state.showModal}
						hide={this.hideModal} />
				);
			});
		} else {
			displayShops = (
				<h1>Loading Shop ... </h1>
			)
		}
		return (
			<div className="scrollable-listings">
				{displayShops}
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
