//Server file
const app = require('../app');
const express = require("express");
const path = require("path");

// If it's in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client", "src")));
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server Listening on port ${port}`));
