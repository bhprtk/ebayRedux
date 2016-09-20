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
				Listing.findById(listing._id)
					.then(listing => {
						listing.bids.push(bid._id);
						listing.highestBid = bid._id;
						listing.save()
							.then(dbListing => {
								User.findById(user._id)
									.then(dbUser => {
										dbUser.bids.push(bid);
										dbUser.save()
										 	.then(savedUser => {
												User.findById(savedUser._id)
													.populate()
													.then(finaluser => {
														res.send({finalUser, dbListing, bid})

													})
										})
									})
							})
					})
			})
			.catch(err => console.log ('err:', err));
	})

module.exports = router;
