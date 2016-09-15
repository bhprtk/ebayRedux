import express from 'express';
const router = express.Router();

import Listing from '../models/listing';
import User from '../models/user';

router.route('/')
	.get((req, res) => {
		console.log('in /api/listings');
		res.send();
	})
	.post((req, res) => {
		Listing.create(req.body)
			.then(newListing => {
				User.addListingToUser(req.body.listedBy, newListing._id, (err, savedUser) => {
					let arr = [];
					let sendObj = {};
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
