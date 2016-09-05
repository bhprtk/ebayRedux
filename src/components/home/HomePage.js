import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import * as listingActions from '../../actions/listingActions';
import firebase from 'firebase';
import {browserHistory} from 'react-router';
import moment from 'moment';

import Navbar from '../common/Navbar';
import AddListingModal from '../common/AddListingModal';
import DisplayListings from './DisplayListings';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			listings: [],
			preview: null
		};

		this.addListingModal = this.addListingModal.bind(this);
		this.hideListingModal = this.hideListingModal.bind(this);
		this.saveListing = this.saveListing.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.logout = this.logout.bind(this);
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

	onFileChange(file) {
		this.setState({
			picture: file,
			preview: file[0].preview
		});
	}

	logout() {
		firebase.auth().signOut()
			.then(() => {
				console.log ('signedOut:');
				browserHistory.push('/');
			},
			err => {
				console.log ('err:', err)
			})
	}

	saveListing(e) {
		e.preventDefault();
		const {imageUrl, title, price, description} = this.state;
		const {user} = this.props;
		const listingObj = {
			imageUrl,
			title,
			price,
			description,
			date: Date.now(),
			listedBy: user.userId
		};
		listingActions.createListing(listingObj);
	}

	render() {
		console.log ('this.props.listings:', this.props.listings)
		return (
			<div>
				<Navbar
					user={this.props.user}
					addListingModal={this.addListingModal}
					logout={this.logout} />

				<AddListingModal
					show={this.state.showModal}
					hide={this.hideListingModal}
					saveListing={this.saveListing}
					onInputChange={this.onInputChange}
					/>

				{this.props.children}
			</div>

		);
	}
}

HomePage.propTypes = {
	userActions: PropTypes.object.isRequired,
	listingActions: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		listings: state.listings,
		imageUrl: state.imageUrl
	};
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch),
		listingActions: bindActionCreators(listingActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
