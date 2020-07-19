const passport = require("passport");
const GoogleStategy = require("passport-google-oauth20").Strategy;
const google = require("./envVars.js");

module.export = passport.use(
  new GoogleStategy(
    {
      clientID: google.ClientId,
      clientSecret: google.ClientSecret,
      callbackURL: "/user/auth/googleuser",
    },
    (accessToken) => {
        console.log(accessToken)
    }
  )
);

// registerUser(params) = adds a user to collection

// idCheck(params) = takes in w/e it needs to check ID(login/check if already registered)
