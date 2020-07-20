const Message = require("../models/Message");
module.exports = (app) => {
  // TODO: add a check on sendMessage do see if duplicate email within some TIME PERIOD (to allow for multiple messages from one person)
  // @route GET form/aForm/read?email(json)
  // @desc Tests users route
  // @access Public
  app.get("/form/aForm/read", (req, res) => {
    Message.findOne({ email: req.body.email }).then((message) =>
      message
        ? res.status(200).json(message)
        : res.status(404).json({ msg: "Not Found" })
    );
  });

  // @route GET form/aForm/readAll
  // @desc Tests users route
  // @access Public
  app.get("/form/aForm/readAll", (req, res) =>
    Message.findOne({ email: "*" })
      .then((message) =>
        message
          ? res.status(200).json(message)
          : res.status(404).json({ msg: "Not Found" })
      )
      .catch((err) => console.debug(err))
  );

  // @route POST /form/sendMessage
  // @desc Adds new message to collection
  app.post("/form/sendMessage", (req, res) => {
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
  });

  app.get("/form/test", (req, res) =>
    res.json({ msg: "/form/test - Good Reply" })
  );

  // @route GET /form
  // @desc Tests users route
  // @access Public
  app.get("/form/", (req, res) => res.json({ msg: "Form API Works" }));
};
