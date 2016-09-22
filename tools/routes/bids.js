import express from 'express';
const router = express.Router();

import Listing from '../models/listing'
import User from '../models/user';
import Bid from '../models/bid';

router.route('/')
	.post((req, res) => {
		const {listing, currentBid, user, date} = req.body;
		const bidObj = {
			listing,
			amount: currentBid,
			user,
			date
		};

		Bid.create(bidObj)
			.then(bid => {
				Promise.all([
					Listing.findById(listing._id)
						.then(dbListing => {
							dbListing.bids.push(bid._id);
							dbListing.highestBid = bid._id;
							return dbListing.save()
						})
						.then(listing => Listing.findById(listing._id).populate('listedBy bids highestBid')),
					User.findById(user._id)
						.then(dbUser => {
							dbUser.bids.push(bid._id);
							return dbUser.save();
						})
						.then(user => User.findById(user._id).populate('listings bids')),
					Bid.findById(bid._id).populate('user listing')
				])
				.then(val => res.send(val))
				.catch(err => console.log ('err:', err));
			})
			.catch(err => console.log ('err:', err));
	});

router.route('/getBidsByUser/:userId')
	.get((req, res) => {
		const {userId} = req.params;
		Bid.find({})
			.populate('listing user')
			.then(bids => bids.filter(bid => bid.user._id.equals(userId)))
			.then(bids => res.send(bids))
			.catch(err => res.status(400).send(err));
	})

module.exports = router;
