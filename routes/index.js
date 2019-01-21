const express = require('express');
const router = express.Router();

// @route GET /
// @desc handles any GET request to index
// @access Public
router.get('/', (req, res) =>{ 
    res.render('index', { title: 'Welcome to the Index!', page: 'index'});
  });

module.exports = router;
