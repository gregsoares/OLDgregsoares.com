const { getByEmail, getAllMessages, postMessage } = require("../controllers/messageCtrl");

module.exports = (app) => {
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
