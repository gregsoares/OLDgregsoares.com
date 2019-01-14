const express = require('express');
const router = express.Router();

// @route GET /
// @desc handles any GET request to index
// @access Public
router.get('/', (req, res) => res.json({ msg: 'Hello World - Page Coming Soon'}));

module.exports = router;
