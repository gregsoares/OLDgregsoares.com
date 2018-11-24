const express = require('express');

const router = express.Router();

/* 404 Error */
router.get('/error/404', (req, res) => {
  res.render('/Error404/index', { title: 'Much like the squirrel, I forgot where I put my ...data', Error: 'error' });
});

// error.capturestacktrace(error);
router.get('/error/500', (req, res) => {
  res.sendStatus(300);
});

module.exports = router;
