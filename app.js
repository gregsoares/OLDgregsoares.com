const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
let db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Importing DB Config
if (process.env.PORT) {
  db = process.env.MONGODB_URI;
} else {
  db = require("./config/keys").devURI;
}

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
