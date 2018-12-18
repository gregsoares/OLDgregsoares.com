const express = require('express');

const router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index/index',  { page: '/index' });
});
// const router = (req, res) => res.render('/index/src/index');

module.exports = router;
