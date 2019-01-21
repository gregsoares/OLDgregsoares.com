const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
let db;

//App Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Import DB keys and config
// const db = require('./config/keys').devURI;
if(process.env.USER == 'yggdrasil') {
  console.log(`--- inside if ---`);
  db = require('./config/keys').devURI;
} else { 
  console.log(`--- inside else ---`);
  
  db = process.env.MONGODB_URI;}
console.log(db);


mongoose
  .connect(db, {useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));

//Import Routes
const indexRouter = require('./routes/indexRouter');
const nidsRouter = require('./routes/nidsRouter');
const eveApiRouter = require('./routes/api/eveMarketData');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

//Route Setup
app.get('/', indexRouter);
app.get('/nids', nidsRouter);
app.use('/evemarketeer', eveApiRouter);

module.exports = app;
