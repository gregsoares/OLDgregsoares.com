const https = require('https');

// @Desc - 
// @Access - Internal
// @params: *itemId(int), regionLimit(string), useSystem(string)
function getData(itemId, regionLimit, useSystem) {
    return new Promise((resolve, reject) => {
      https.get(`https://api.evemarketer.com/ec/marketstat/json?typeid=${itemId}`, res => {
      let eveMarketData = "";
        try {
          res.on('data', inc => {
              eveMarketData += inc;
          });
          res.on('end', () => {
            eveMarketData = JSON.parse(eveMarketData);
            // Checking data received
            // console.log(`on(end): ${eveMarketData}`);
            resolve(eveMarketData);
          });
        } catch (error) {
          reject(error);
        }
  });
});
}

module.exports = getData;
