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
		console.log ('req.body:', req.body)
		Listing.create(req.body)
			.then(newListing => {
				console.log ('newListing:', newListing)
				User.addListingToUser(req.body.listedBy, newListing._id, (err, savedUser) => {
					res.send({newListing, savedUser});
				})
			})
			.catch(err => console.log ('err:', err));
		// Listing.saveNewListing(req.body, (err, newListing) => {
		// 	if(err) res.status(400).send(err);
		// 	res.send(newListing);
		// });
	});

module.exports = router;
