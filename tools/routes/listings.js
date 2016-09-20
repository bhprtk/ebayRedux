import express from 'express';
const router = express.Router();

import Listing from '../models/listing';
import User from '../models/user';

router.route('/')
	.get((req, res) => {
		Listing.find({})
			.populate('listedBy')
			.then(listings => res.send(listings))
			.catch(err => res.status(400).send(err));
	})
	.post((req, res) => {
		Listing.create(req.body)
			.then(newListing => {
				User.addListingToUser(req.body.listedBy, newListing._id, (err, savedUser) => {
					Promise.all([
						Listing.findById(newListing._id)
							.populate('listedBy'),
						User.findById(savedUser._id)
							.populate('listings')
						])
						.then(val => {
							res.send(val);
						})
				})
			})
			.catch(err => console.log ('err:', err));
	})
	.delete((req, res) => {
		Listing.remove({})
			.then(res.send())
			.catch(err => console.log ('err:', err));
	});

router.route(`/:id`)
	.get((req, res) => {
		Listing.findById(req.params.id)
			.populate('listedBy bids highestBid')
			.then(listing => res.send(listing))
			.catch(err => res.status(400).send(err))
	})

module.exports = router;
