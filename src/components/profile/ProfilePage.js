import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import firebase from 'firebase';

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

	componentDidMount() {
		const {actions, user} = this.props;
		actions.getCurrentUser();
			// .then(() => {
			// 	console.log ('user:', user)
			// })
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
		return (
			<div>
				<Navbar
					user={this.props.user}
					addListingModal={this.addListingModal}
					hideListingModal={this.hideListingModal}/>
				<AddListingModal
					show={this.state.showModal}
					hide={this.hideListingModal}
					saveListing={this.saveListing}
					onInputChange={this.onInputChange}/>

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

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
