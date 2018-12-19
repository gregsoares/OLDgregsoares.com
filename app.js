// Importing dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Declaring Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const errorRouter = require('./routes/error');
const apiRouter = require('./routes/api');

const app = express();

// Setting up path, views and engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, '/views', '/src'));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../', 'views')))
app.set('view engine', 'jsx');
const options = ({
  transform: {},
});
app.engine('jsx', require('express-react-views').createEngine(options));

// Setting up routes
app.use('/', indexRouter);
app.use('/error/:', errorRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/api/:id', apiRouter);

// MongoDB Keys and Connection info
const db = require('./config/keys').prodURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.error(err));

// @Error handlers
// @404 error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// @development error handler
// Print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// @production error handler
// Hide stacktrace from user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
