const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

// TODO: add a check on sendMessage do see if duplicate email within some TIME PERIOD (to allow for multiple messages from one person)
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
  if (req.body === null) new Error(res.send(req.body));
  if (req.body === undefined) new Error(res.send(req.body));

  console.debug(`
  name: ${req.body.name}
  email: ${req.body.email}
  message: ${req.body.message}
  `);

  let message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  message
    .save()
    .then((res) => {
      JSON.stringify(res);
    })
    .catch((error) => {
      console.debug(error);
      res.json(error);
    });
  res.json(res.body);
});
router.get("/test", (req, res) => res.json({ msg: "/form/test - Good Reply" }));

// @route GET /form
// @desc Tests users route
// @access Public
router.get("/", (req, res) => res.json({ msg: "Form API Works" }));

module.exports = router;
