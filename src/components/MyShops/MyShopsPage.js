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
		this.setState({showModal: true});

	}

	hideModal() {
		this.setState({showModal: false});
	}

	render() {
		const { shops } = this.props.user;
		const displayShops = shops.map((shop, index) => {
			return (
				<div>
					<DisplayMyShopsCard
						shop={shop}
						key={index}
						list={this.list} />
					<AddListingModal
						shop={shop}
						show={this.state.showModal}
						hide={this.hideModal}/>
				</div>
			);
		});
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
