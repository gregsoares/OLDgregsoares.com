const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
let db;
require("./models/Message");

const Message = mongoose.model("messages");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    console.log(process.env.PORT ? `\nMongoDB ERROR - Connection acting up!\n ${err}` : `\nMongoDB ERROR - Connection acting up!\n ${err}`)
  );

// Routes
const formRouter = require('./routes/contactForm');
app.use("/form", formRouter);

module.exports = app;
