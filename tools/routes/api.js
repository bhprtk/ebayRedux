import express from 'express';
const router = express.Router();

router.use('/users', require('./users'));
router.use('/listings', require('./listings'));

module.exports = router;
