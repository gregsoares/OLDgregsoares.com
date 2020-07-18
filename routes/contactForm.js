const express = require("express");
const router = express.Router();

const Message = require("../models/Message");
router.get("/", (req, res) => res.json({ msg: "/api/users - Good Reply" }));

// @route GET /form
// @desc Tests users route
// @access Public
router.get("/", (req, res) => res.json({ msg: "Form API Works" }));

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
  message
    .save()
    .catch((resp) => {
      console.debug(resp);
      console.debug(resp.body);
    });
    res.json('Success')
});

//   let showData = `
//     ${req.body.data.name}: ${req.body.data.email}
//     Message: <br> ${req.body.data.message}
//     `;
//   console.debug(showData);

//   const sendMessage = new Message({
//     name: data.name,
//     email: data.email,
//     message: data.message,
//   }).save();

module.exports = router;
