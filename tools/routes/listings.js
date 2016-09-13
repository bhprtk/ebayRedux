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
		console.log ('req.body:', req.body);
		res.send();
	})

module.exports = router;
