const express = require('express');
const router = express.Router();

// @route GET /
// @desc handles any GET request to index
// @access Public
router.get('/', (req, res) =>{ 
    res.render('projects', { title: 'Projects', page: 'projects'});
  });

module.exports = router;
