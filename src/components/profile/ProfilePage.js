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
		this.onInputChange = this.onInputChange.bind(this);
	}

	addListingModal() {
		this.setState({ showModal: true });
	}

	hideListingModal() {
		this.setState({ showModal: false });
	}

	onInputChange(e) {
		let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({
      [key]: value
    });
	}

	saveListing(e) {
		e.preventDefault();
		console.log ('here:');
		console.log ('this.state:', this.state);
	}

	render() {
		const {user} = this.props;
		return (
			<div>
				<Navbar
					user={user}
					addListingModal={this.addListingModal}
					hideListingModal={this.hideListingModal}/>
				<AddListingModal show={this.state.showModal} hide={this.hideListingModal} saveListing={this.saveListing} onInputChange={this.onInputChange}/>

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
