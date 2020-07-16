// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
    "coverageThreshold": {
      "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
      }
    },
    "coverageDirectory": "./src/coverage"

};