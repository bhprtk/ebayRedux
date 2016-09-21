import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import * as listingActions from '../../actions/listingActions';
import {bindActionCreators} from 'redux';

import DisplayMyListings from './DisplayMyListings';

class MyListingsPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {listingActions, user} = this.props;
		listingActions.getListingsByUser(user);
	}

	render() {
		return (
			<div>
				<DisplayMyListings
					listings={this.props.myListings}/>
			</div>
		);

	}
}

const styles = {
	card: {
		margin: 10
	},
	cardText: {
		color: '#696969'
	},
	bidButton: {
		background: '#66BB6A',
		borderColor: '#66BB6A',
		color: '#fff'
	}
};

MyListingsPage.propTypes = {
	user: PropTypes.object.isRequired,
	myListings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		myListings: state.myListings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		listingActions: bindActionCreators(listingActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListingsPage);
