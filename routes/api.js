const express = require('express');

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

module.exports = router;
