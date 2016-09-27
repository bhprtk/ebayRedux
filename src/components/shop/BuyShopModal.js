import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shopActions from '../../actions/shopActions';

class BuyShopModal extends Component {
	constructor(props) {
		super(props);

		this.buyShop = this.buyShop.bind(this);
	}

	buyShop() {
		console.log('lets buy this shitttt');
		this.props.hide();
	}

	render() {
		const {show, hide, shop, user} = this.props;
		return (
			<Modal show={show} onHide={hide}>
				<Modal.Header closeButton>
					<img src="http://www.mariowiki.com/images/d/d6/MKDS_Coin.gif" style={styles.coinPhoto}/>
					<span style={styles.displayName}><strong>{user.coins}</strong></span>
				</Modal.Header>
				<Modal.Body style={styles.modalBody}>
					<h4>Are you sure you want to spend {shop.price} coins for {shop.title}?</h4>
				</Modal.Body>
				<Modal.Footer style={styles.footer}>
					<button className="btn btn-default" onClick={hide}>Cancel</button>
					<button className="btn btn-default" onClick={this.buyShop}>Buy</button>
				</Modal.Footer>
			</Modal>
		);
	}

}

const styles = {
	modalBody: {
		background: '#fafafa'
	},
	coinPhoto: {
		height: 30,
		width: 30
	},
	displayName: {
		paddingLeft: 10,
		fontSize: 18
	},
	footer: {
		background: '#fafafa'
	}
};

function mapDispatchToProps(dispatch) {
	return {
		shopActions: bindActionCreators(shopActions, dispatch)
	};
}

export default connect({}, mapDispatchToProps)(BuyShopModal);
