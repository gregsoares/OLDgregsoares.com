const express = require('express');
const router = express.Router();

// @Desc - 
// @Access - Public
// @params: *userId(int)
router.get('/test', (req, res) => res.json({ userData: 'Some User Data'}));

module.exports = router;
