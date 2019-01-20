const express = require('express');
const router = express.Router();
const eveMarketData = require('../api/eveMarketData');

router.get('/item', (req, res) => {
  console.log(`eveApiRouter: ${req.body}`);
  res.send(eveMarketData(req.query.item));
});
router.get('/', (req, res) => {
  console.log(`request to evemarketeer: ${req.query.item}`);
  let itemData = eveMarketData(req.query.item);
  itemData.then((apiResp) => {
    console.log(`from inside route: ${apiResp}`);
    res.render('evemarketeer', {'title': 'API malfunction', item: apiResp })
  }).catch((err) => {
    console.log(err);
    
  });
});

module.exports = router;
