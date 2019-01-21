const https = require('https');
const express = require('express');
const router = express.Router();

router.get('/item', (req, res) => {
  console.log(`eveApiRouter: ${req.body.itemid}`);
  let recData = getItemData(req.body.itemid);
  recData.then(() => res.render('evemarketeer', { 'title': 'Testing Eve Market API', item: recData}))
  .catch(err => console.log(err));
});

// @Desc - 
// @Access - Internal
// @params: *itemId(int), regionLimit(string), useSystem(string)
function getItemData(itemId, regionLimit, useSystem) {
    return new Promise((resolve, reject) => {
      
      https.get(`https://api.evemarketer.com/ec/marketstat/json?typeid=${itemId}`, res => {
        let eveMarketData = '';
        try {
          res.on('data', inc => {
              eveMarketData += inc;
          });
          res.on('end', () => {
            eveMarketData = JSON.parse(eveMarketData);
            // Checking data received
            resolve(eveMarketData);
          });
        } catch (error) {
          reject(error);
        }
  });
});
}
module.exports = router;
