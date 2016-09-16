import express from 'express';
const router = express.Router();

import Listing from '../models/listing';
import User from '../models/user';

router.route('/')
	.get((req, res) => {
		console.log('hit route')
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
	});

module.exports = router;
