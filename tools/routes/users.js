import express from 'express';
const router = express.Router();

router.route('/')
	.get((req, res) => {
		console.log ('in /api/users:');
		res.send();
	});

module.exports = router;
