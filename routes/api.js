const express = require('express');
const axios = require('axios');
const router = express.Router();


/* /api/getAll -> return all users in the DB */
router.get('/user/:userId', (req, res) => {
  res.status(200);
  // .send({ title: '/api/: Much like the squirrel, I forgot where I put my ...data' });
});

/* /api/getAll -> return all users in the DB */
router.get('/getAll', (req, res) => {
  res.status(200);
  // .send({ title: '/api/: Much like the squirrel, I forgot where I put my ...data' });
});

/* /api -> 404 Error */
router.get('/', (req, res) => {
  res.status(200).render('/index/src/index');
});

// Giffy for your Thoughts API:
//javascript, jQuery
router.get('/:giffthought', (req, res, next) => {
  let query = `http://api.giphy.com/v1/gifs/search?q=${req.body.giffthought}&api_key=66Y4Bs2hDD5CszQ3qA3WhcaFnnbxDJ37&limit=5`;
  console.log(`query: ${query}, Giffy requested: ${req.body}`);
  
  return axios.get(query)
    .then((res) => {
      dispatch(response.data)
      .done( (data) => { console.log('success got data', data); });
    });
  });
 
module.exports = router;
