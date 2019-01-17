const express = require('express');
const eveMarketData = require('../api/eveMarketData');
const router = express.Router();

// @route GET /
// @desc handles any GET request to index
// @access Public
router.get('/', (req, res) =>{ 
    let itemData = eveMarketData(34);
    console.log(`itemData = ${itemData}`);
    
    res.render('index', { title: 'Welcome to the Index!', page: 'index', eveMarketData: itemData });
  });

module.exports = router;
