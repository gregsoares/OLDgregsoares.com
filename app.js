const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
let db;

//App Setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import DB keys and config
// const db = require('./config/keys').devURI;
if(process.env.USER == 'yggdrasil') {
  db = require('./config/keys').devURI;
} else { 
  db = process.env.MONGODB_URI;}

mongoose
  .connect(db, {useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(`DB Connection error: \n${err}`));

//Import Routes
const indexRouter = require('./routes/indexRouter');
const nidsRouter = require('./routes/nidsRouter');
const projectsRouter = require('./routes/projectsRouter');
const errorRouter = require('./routes/error');

//Routes Setup

module.exports = app;
