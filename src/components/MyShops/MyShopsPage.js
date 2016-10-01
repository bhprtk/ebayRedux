import React, {Component} from 'react';
import { connect } from 'react-redux';

import DisplayMyShops from './DisplayMyShops';
import DisplayMyShopsCard from './DisplayMyShopsCard';

class MyShopsPage extends Component {
	constructor(props) {
		super(props);

		this.list = this.list.bind(this);
	}

	list(e) {
		console.log ('e.target.dataset.shopid:', e.target.dataset.shopid)
	}

	render() {
		const { shops } = this.props.user;
		const displayShops = shops.map((shop, index) => {
			return (
				<DisplayMyShopsCard
					shop={shop}
					key={index}
					list={this.list} />
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
