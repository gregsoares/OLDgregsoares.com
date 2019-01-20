const express = require('express');
const router = express.Router();

// @route GET /
// @desc handles any GET request to nids page
// @access Public
router.get('/nids', (req, res) => { 
    res.render('nids', { title: 'RaspberryPi - Helheim - Network Intrusion Detection System', 'page': 'nids'});
  });

module.exports = router;
