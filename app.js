const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//App Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Import DB keys and config
const db = require('./config/keys').devURI;

mongoose
  .connect(db, {useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));

//Import Routes
const indexRouter = require('./routes/index');
const nidsRouter = require('./routes/nids');
const eveApiRouter = require('./routes/api/eveMarketData');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

//Route Setup
app.get('/', indexRouter);
app.get('/nids', nidsRouter);
app.use('/evemarketeer', eveApiRouter);

module.exports = app;
