const express = require('express');
const router = express.Router();

// @route GET /
// @desc handles any GET request to index
// @access Public
router.get('/error', (req, res) =>{ 
    res.render('error', { title: 'Unexpected result!', page: 'Error' });
  });

module.exports = router;

