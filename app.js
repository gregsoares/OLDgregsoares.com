const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const { trace } = require("console");
const { send } = require("process");
const app = express();
let db;

// If it's in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client", "src")));
}

// Routes
app.post("/form/sendMessage/", (req, res) => {
  if (req.body.data === null) res.send(req.body);
  if (req.body.data === undefined) res.send(req.body);
  if (req.body.data.length() === 0) res.send(req.body);

  () => {
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
      //TODO: add service, not Gmail
      host: "smtp.ethereal.email",
      port: 587,
      // add creds here Audie Johnson
      auth: {
        user: "audie72@ethereal.email",
        pass: "4apaqbMvbNC4eMsfG7",
      },
    });
    let mailOpts = {
      from: data.email,
      to: "gregselvagem@gmail.com",
      subject: `Message from ${data.name}`,
      html: `
    
    <h2> <b> FROM: </b> ${data.name}: ${data.email} </h2><br> <br>
    <h2> Message: <br> ${data.message} </h2>
    `,
    };
    smtpTransport
      .sendMail(mailOpts)
      .then((resp) => res.send("Success"))
      .catch((error) => res.send(error));

    smtpTransport.close();
  };
});

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
  .catch((err) => console.log("\nMongoDB ERROR - Connection acting up!\n"));

module.exports = app;
