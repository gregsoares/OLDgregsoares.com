const express = require('express');
const router = express.Router();

// @route GET /
// @desc handles any GET request to index
// @access Public
router.get('/nids', (req, res) =>{ 
    res.render('nids', { title: 'RaspberryPi - Helheim - Network Intrusino Detectin System', page: 'nids'});
  });

module.exports = router;
