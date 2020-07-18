const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

// @route GET form/aForm/read?email(json)
// @desc Tests users route
// @access Public
router.get("/aForm/read", (req, res) => {
  Message.findOne({ email: req.body.email }).then((message) =>
    message
      ? res.status(200).json(message)
      : res.status(403).json({ msg: "no good" })
  );
});

// @route GET form/aForm/readAll
// @desc Tests users route
// @access Public
router.get("/aForm/readAll", (req, res) => res.json({ msg: "allUsers Works" }));

// @route POST /form/sendMessage
// @desc Adds new message to collection
router.post("/sendMessage", (req, res) => {
  if (req.body === null) res.send(req.body);
  if (req.body === undefined) res.send(req.body);

  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  let message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  message.save().catch((resp) => {
    console.debug(resp);
    console.debug(resp.body);
    res.json(resp);
  });
  res.json("Success");
});
router.get("/", (req, res) => res.json({ msg: "/api/users - Good Reply" }));

// @route GET /form
// @desc Tests users route
// @access Public
router.get("/", (req, res) => res.json({ msg: "Form API Works" }));

module.exports = router;
