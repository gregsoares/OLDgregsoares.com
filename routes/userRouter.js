const passport = require("passport");

module.exports = (app) => {
  // @route: GET form/aForm/read?email(json)
  // @return: [{allThat matches}]
  // @description: Tests users route
  // @access: Public
  app.get("/user/logout", (req, res) => {
    req.logout();
    res.send(`${req.user} logged out.`);
  });

  // @route GET user/auth/googleuser
  // @desc Returned token from Gmail authentication server
  // @access Public
  // Route returned by oauth with user's code
  app.get("/user/auth/googleuser", passport.authenticate("google"));

  // @route GET user/auth/google
  // @desc Redirects to Gmail authentication server
  // @access Public
  // Initial 'get user code' route (login)
  app.get(
    "/user/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // @route GET user/profile
  // @return token from Gmail authentication server
  // @access Public
  // Route returned by oauth with user's code
  app.get("/user/profile", (req, res) => res.send(req.user));
};
