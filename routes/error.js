const express = require('express');

const router = express.Router();

/* 404 Error */
router.get('/404', (req, res) => {
  res.render('/error/index', { title: 'Much like the squirrel, I forgot where I put my ...data', Error: 'error' });
});

// error.capturestacktrace(error);
router.get('/error/500', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
