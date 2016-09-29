import express from 'express';
const router = express.Router();

import User from '../models/user';
import Listing from '../models/listing';

router.route('/')
	.get((req, res) => {
		User.find({})
			.populate('listings bids shops')
			.then(users => res.send(users))
			.catch(err => console.log ('err:', err))
	})
	.post((req, res) => {
		User.saveNewUser(req.body, (err, newUser) => {
			if(err) res.status(400).send(err);
			res.send(newUser);
		});
	});

router.route('/:email')
	.get((req, res) => {
		const {email} = req.params;
		User.findOne({email})
			.populate('shops')
			.then(user => res.send(user))
			.catch(err => res.status(400).send(err));
	});

router.route('/getListingsByUser/:userId')
	.get((req, res) => {
		const {userId} = req.params;
		Listing.find({})
			.populate('listedBy bids highestBid')
			.then(listings => listings.filter(listing => listing.listedBy._id.equals(userId)))
			.then(listings => res.send(listings))
			.catch(err => res.status(400).send(err));
	});

module.exports = router;
