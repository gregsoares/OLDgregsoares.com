const https = require('https');

// @Desc - 
// @Access - Internal
// @params: *itemId(int), regionLimit(string), useSystem(string)

function getData(itemId, regionLimit, useSystem) {
  let eveMarketData = "";
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
