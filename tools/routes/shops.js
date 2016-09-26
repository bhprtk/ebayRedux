import express from 'express';
const router = express.Router();

import Listing from '../models/listing';
import User from '../models/user';
import Shop from '../models/shop';

router.route('/')
	.post((req, res) => {
		Shop.create(req.body)
			.then(newShop => res.send(newShop))
			.catch(err => res.status(400).send(err));
	})

module.exports = router;
