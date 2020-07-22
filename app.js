const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./controllers/passport.js");
const keys = require("./config/keys.js");

app.use(
  cookieSession({
    masAge: 30 * 24 * 60 * 60 * 1000, //30days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
