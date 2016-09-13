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
		})
	})

module.exports = router;
