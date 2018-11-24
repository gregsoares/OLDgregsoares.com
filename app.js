// Importing dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Declaring Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const errorRouter = require('./routes/error');
const apiRouter = require('./routes/api');

const app = express();

// Setting up path, views and engine
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Setting up routes
app.get('/error/:', errorRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/api/:id', apiRouter);
app.use('/', indexRouter);

// MongoDB Keys and Connection info
// const db = require('../config/keys').prodURI;
// mongoose.connect(db, { useNewUrlParser: true })
//   .then(() => console.log('MongoDB connected.'))
//   .catch(err => console.error(err));

module.exports = app;
