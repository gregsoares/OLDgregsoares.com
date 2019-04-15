const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
let db;

// If it's in production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  } else {
      app.use(express.static(path.join(__dirname, 'client', 'src')));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importing DB Config
  if(process.env.PORT){
   db = process.env.MONGODB_URI; 
  } else {
   db = require('./config/keys').devURI;
  }

// Connecting to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('\nMongoDB ERROR - Connection acting up!\n'));

// Importing Routes
// const usersRouter = require('./routes/api/users');
// const profileRouter = require('./routes/api/profile');
// const postsRouter = require('./routes/api/posts');

// app.use('/api/users', usersRouter);
// app.use('/api/profile', profileRouter);
// app.use('/api/posts', postsRouter);


module.exports = app;