const passport = require("passport");
const GoogleStategy = require("passport-google-oauth20").Strategy;
// const keys = require("../config/keys");

module.export = passport.use(
  new GoogleStategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/user/auth/googleuser",
    },
    (accessToken) => {
        console.log(accessToken)
    }
  )
);

// registerUser(params) = adds a user to collection

// idCheck(params) = takes in w/e it needs to check ID(login/check if already registered)
