const { getByEmail, getAllMessages, postMessage } = require("../controllers/messageCtrl");

module.exports = app => {

  // @route: GET form/aForm/read?email(json)
  // @return: messages::{allThat matches}
  // @description: Get all messages from the specified email route
  // @access: Public
  app.get("/form/aForm/read", getByEmail);

  // @route: GET form/aForm/readAll
  // @return: messages::{All messages}
  // @description: 
  // @access: Public
  app.get("/form/aForm/readAll", getAllMessages);

  // @route: POST /form/sendMessage
  // @return: {msg: "OK" || "No Data"}
  // @description: Adds new message to collection
  // @access: Public
  app.post("/form/sendMessage", postMessage);

  // @route: GET /form
  // @return: {testMessage: "Form API Works"}
  // @description: Simple route test
  // @access: Public
  app.get("/form", (req, res) => res.json({ testMessage: "Form API Works" }));
};