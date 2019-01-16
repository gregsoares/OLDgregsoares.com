const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//App Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Import DB keys and config

//Import Routes
const indexRouter = require('./routes/index');

app.get('/', indexRouter);

module.exports = app;