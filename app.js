const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const { db } = require("./controllers/passport.js");
const path = require("path");
let keys = {};

// If it's in production mode
if (process.env.NODE_ENV === "production") {
  keys = {
    cookieKey: process.env.cookieKey,
  };

  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client", "src")));
  keys = require("./config/keys");
}

app.use(
  cookieSession({
    masAge: 30 * 24 * 60 * 60 * 1000, //30days
    keys: [keys.cookieKey],
  })
); // ========= End Environment conditional
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// Creating Server
const port = process.env.PORT || 3001;

app.listen(port, () => console.debug(`Server listening on port ${port}`));

module.exports = app;
