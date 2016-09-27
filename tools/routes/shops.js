import express from 'express';
const router = express.Router();

import Listing from '../models/listing';
import User from '../models/user';
import Shop from '../models/shop';

router.route('/')
	.get((req, res) => {
		Shop.find({})
			.then(shops => res.send(shops))
			.catch(err => res.status(400).send(err))
	})
	.post((req, res) => {
		Shop.create(req.body)
			.then(newShop => res.send(newShop))
			.catch(err => res.status(400).send(err));
	})

router.route('/buyShopById/:shopId/:userId')
	.put((req, res) => {
		const {shopId, userId} = req.params;
		console.log ('shopId:', shopId)
		console.log ('userId:', userId)
		res.send();
	})

module.exports = router;
