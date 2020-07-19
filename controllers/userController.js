const passport = require("passport");
const GoogleStategy = require("passport-google-oauth20").Strategy;
// const keys = require("../config/keys");
let googleClientId, googleClientSecret;
if (process.env.PORT) {
  googleClientId = process.env.googleClientID;
  googleClientSecret = process.env.googleClientSecret;
} else {
  googleClientId = require("../config/keys").googleClientID;
  googleClientSecret = require("../config/keys").googleClientSecret;
}

module.export = passport.use(
  new GoogleStategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/user/auth/googleuser",
    },
    (accessToken) => {
        console.log(accessToken)
    }
  )
);

// registerUser(params) = adds a user to collection

// idCheck(params) = takes in w/e it needs to check ID(login/check if already registered)
