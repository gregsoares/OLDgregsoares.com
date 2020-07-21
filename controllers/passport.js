const passport = require("passport");
const GoogleStategy = require("passport-google-oauth20").Strategy;
require("../models/UserModel");
const mongoose = require("mongoose");
const User = mongoose.model("users");

let googleClientId, googleClientSecret, db;
if (process.env.PORT) {
  googleClientId = process.env.googleClientID;
  googleClientSecret = process.env.googleClientSecret;
  db = process.env.MONGODB_URI;
} else {
  // If in DEV environment
  googleClientId = require("../config/keys").googleClientID;
  googleClientSecret = require("../config/keys").googleClientSecret;
  db = require("../config/keys").devURI;
}

// @desc: checks if googleId already exists in users collection, if NOT => register
// TODO: Return to valid page
const newUser = (googleId, fName, lName, emailAddress, profileURL) =>
  User.findOne({ googleId: googleId }).then((res) => {
    if (res) return console.log(`${fName} - ${emailAddress}  already exists`);
    else {
      new User({
        googleId: googleId,
        firstName: fName,
        lastName: lName,
        email: emailAddress,
        profileImage: profileURL,
      }).save();
    }
  }); // END newUser

const google = passport.use(
  new GoogleStategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/user/auth/googleuser",
    },
    (accessToken, refreshToken, profile, done) => {
      newUser(
        profile.id,
        profile.name.givenName,
        profile.name.familyName,
        profile.emails[0].value,
        profile.photos[0].value
      ).then(() =>
        // TODO: add cookie
        console.debug(`\n
    accessToken: ${accessToken}
    refreshToken: ${refreshToken} \n
    `)
      );
      done();
    }
  )
);

module.exports = { googleClientId, googleClientSecret, db, google };
