import express from 'express';
const router = express.Router();

import User from '../models/user';

router.route('/')
	.get((req, res) => {
		console.log ('in /api/users:');
		res.send();
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
			.then(user => res.send(user))
			.catch(err => res.status(400).send(err));
	});

router.route('/getListingsByUser/:userId')
	.get((req, res) => {
		User.findById(req.params.userId)
			.select('listings')
			.populate('listings')
			.then(listings => res.send(listings))
			.catch(err => res.status(400).send(err))
	})

module.exports = router;
