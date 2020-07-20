const passport = require("passport");

// TODO: registerUser(params) = adds a user to collection

// TODO: idCheck(params) = takes in w/e it needs to check ID(login/check if already registered)
module.exports = app => {
  // @route GET user/auth/googleuser
  // @desc Returned token from Gmail authentication server
  // @access Public
  // Route returned by oauth with user's code
  app.get("/user/auth/googleuser", passport.authenticate("google"), (res) => {
    console.debug(`inside userRouter: ${res}`);
  });

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
};
