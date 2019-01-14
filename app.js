const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import DB keys and config

//Import Routes
const indexRouter = require('./routes/index');

//Import Controllers

//App Setup
app.use('/', indexRouter);

module.exports = app;