import express from 'express';
const router = express.Router();

router.use('/users', require('./users'));
router.use('/listings', require('./listings'));
router.use('/bids', require('./bids'));

module.exports = router;
