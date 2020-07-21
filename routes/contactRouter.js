require('../models/MessageModel');
const mongoose = require('mongoose');
const Message = mongoose.model('messages');

module.exports = (app) => {
  const getByEmail = (req, res) => {
    Message.find({ email: req.body.email }).then((message) =>
      message
        ? res.status(200).json(message)
        : res.status(404).json({ msg: "Not Found" })
    );
  };

  const getAllMessages = (req, res) =>
    Message.find({})
      .then((message) =>
        message
          ? res.status(200).json(message)
          : res.status(404).json({ msg: "Not Found" })
      )
      .catch((err) => console.debug(err));

  const postMessage = (req, res) => {
    if (req.body.email === null) new Error(res.send(req.body));
    if (req.body.email === undefined) new Error(res.send(req.body));

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
        console.debug(res);
        JSON.stringify(res);
      })
      .catch((error) => {
        console.debug(error);
        res.json(error);
      });
    res.json(res.body);
  };

  // TODO: add a check on sendMessage do see if duplicate email within some TIME PERIOD (to allow for multiple messages from one person)

  // @route GET form/aForm/read?email(json)
  // @return [{allThat matches}]
  // @desc Tests users route
  // @access Public
  app.get("/form/aForm/read", getByEmail);

  // @route GET form/aForm/readAll
  // @desc Tests users route
  // @access Public
  app.get("/form/aForm/readAll", getAllMessages);

  // @route POST /form/sendMessage
  // @return {msg: "OK" || "No Data"}
  // @desc Adds new message to collection
  // @access Public
  app.post("/form/sendMessage", postMessage);

  app.get("/form/test", (req, res) =>
    res.json({ msg: "/form/test - Good Reply" })
  );

  // @route GET /form
  // @return {"Form API Works"}
  // @desc Tests users route
  // @access Public
  app.get("/form", (req, res) => res.json({ msg: "Form API Works" }));
};
