const https = require('https');
let eveMarketData = "";

function getData(itemId, regionLimit, useSystem) {
  const itemData = https.get(`https://api.evemarketer.com/ec/marketstat/json?typeid=${itemId}`, res => {
    res.on('data', inc => {
        eveMarketData += inc;
    });
    res.on('end', () => {
      eveMarketData = JSON.parse(eveMarketData);
      // Checking data received
      console.log(eveMarketData);
      
    });
  });
  return eveMarketData;
}

module.exports = getData;
