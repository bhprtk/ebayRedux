import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import * as listingActions from '../../actions/listingActions';
import firebase from 'firebase';

import DisplayProfile from './DisplayProfile';
import Navbar from '../common/Navbar';
import AddListingModal from '../common/AddListingModal';
import DisplayListings from './DisplayListings';

class ProfilePage extends Component {
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
	}

	componentDidMount() {
		const {userActions, listingActions} = this.props;

		firebase.database().ref('listings').on('value', snap => {
			let listingsArr = [], listings = snap.val();
			for(let key in listings) {
				listingsArr.push(listings[key]);
			}
			this.setState({
				listings: listingsArr,
				showModal: false
			});
		});
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

	saveListing(e) {
		e.preventDefault();
		const {imageUrl, title, price, description} = this.state;
		const listingObj = {
			imageUrl,
			title,
			price,
			description,
			
		};
		listingActions.createListing(listingObj);
	}

	render() {
		console.log ('this.props.user:', this.props.user)
		return (
			<div>
				<Navbar
					user={this.props.user}
					addListingModal={this.addListingModal}
					hideListingModal={this.hideListingModal}/>

				<DisplayListings
					user={this.props.user}
					listings={this.state.listings}/>

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

ProfilePage.propTypes = {
	userActions: PropTypes.object.isRequired,
	listingActions: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	listings: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
