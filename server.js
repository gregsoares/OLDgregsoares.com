const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const uri = require("./config/keys");


const app = express();

// If it's in production mode
if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client", "src")));
}

app.use(express.json());

// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});