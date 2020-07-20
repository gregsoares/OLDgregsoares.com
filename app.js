const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./controllers/passport.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Connecting to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    console.log(`\nMongoDB ERROR - Connection acting up!\n ${err}`)
  );

// Routes
const formRouter = require("./routes/contactForm");
const userRouter = require("./routes/userRouter");
app.use("/form", formRouter);
app.use("/user", userRouter);

module.exports = app;
