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
		Shop.findById(shopId)
			.then(shop => {
				shop.remaining--;
				return shop.save();
			})
			.then(savedShop => {
				return User.findById(userId)
					.then(user => [user, savedShop])
					.catch(err => err);
			})
			.then(data => {
				const [user, shop] = data;
				user.shops.push(shop);
				user.coins -= shop.price;
				return user.save()
					.then(savedUser => [savedUser, shop])
					.catch(err => err);
			})
			.then(data => {
				User.findById(data[0]._id)
					.populate('listings bids shops')
					.then(user => [user, data[1]])
					.catch(err => err)
			})
			.then(data => res.send(data))
			.catch(err => res.status(400).send(err));
	})

module.exports = router;
