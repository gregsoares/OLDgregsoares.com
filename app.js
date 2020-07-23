const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const { db } = require("./controllers/passport.js");

let keys = {}

if (process.env.NODE_ENV === "production") {
  keys = {
    cookieKey: process.env.cookieKey
  };
} else {
  keys = require('./config/keys');
}
app.use(
  cookieSession({
    masAge: 30 * 24 * 60 * 60 * 1000, //30days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/contactRouter")(app);
require("./routes/userRouter")(app);

// Connecting to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    console.log(`\nMongoDB ERROR - Connection acting up!\n ${err}`)
  );

module.exports = app;
