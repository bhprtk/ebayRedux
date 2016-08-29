import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import DisplayProfile from './DisplayProfile';
import Navbar from '../common/Navbar';
import AddListingModal from '../common/AddListingModal';

class ProfilePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};

		this.addListingModal = this.addListingModal.bind(this);
		this.hideListingModal = this.hideListingModal.bind(this);
		this.saveListing = this.saveListing.bind(this);
	}

	addListingModal() {
		this.setState({ showModal: true });
	}

	hideListingModal() {
		this.setState({ showModal: false });
	}

	saveListing(productObj) {
		console.log ('productObj:', productObj);
	}

	render() {
		const {user} = this.props;
		return (
			<div>
				<Navbar
					user={user}
					addListingModal={this.addListingModal}
					hideListingModal={this.hideListingModal}/>
				<AddListingModal show={this.state.showModal} hide={this.hideListingModal} saveListing={this.saveListing}/>

				{this.props.children}
			</div>
		);
	}
}

ProfilePage.propTypes = {
	user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(ProfilePage);
