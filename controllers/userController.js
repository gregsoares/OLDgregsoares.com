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
    (accessToken, refreshToken, profile, done) => {
      console.debug(`\n
    accessToken: ${accessToken}
    refreshToken${refreshToken} \n
    Profile Info: 
      Full name: ${(profile.name.givenName)} ${(profile.name.familyName)}
      Email: ${(profile.emails[0].value)} 
      Photo URL: ${(profile.photos[0].value)}
    \n `);
    }
  )
);

// registerUser(params) = adds a user to collection

// idCheck(params) = takes in w/e it needs to check ID(login/check if already registered)
