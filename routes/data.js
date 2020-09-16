const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	const data = require('../data/data2.json');
	// API Data
	res.json(data);
});

module.exports = router;
