const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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

// TODO: isLoggedIn(googleId/Token) return Boolean
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user));
});

// @Description: checks if googleId already exists in users collection, if NOT => register
// TODO: Return to valid page
const newUser = (accessToken, refreshToken, profile, done) => {
  return User.findOne({ googleId: profile.id }).then((res) => {
    if (res) done({ msg: "User already registered" }, res);
    else {
      //if not found, then register
      new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        profileImage: profile.photos[0].value,
      })
        .save()
        .then((user) => done({ msg: "New User created" }, user))
        .catch((err) => console.debug(err));
    }
  });
}; // END newUser

// @Description: Creates and saves a new user to DB
// Data: GoogleId, FirstName, LastName, Email, ProfileImageURL
// Return to success/fail Redirect pages
const google = passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/user/auth/googleuser",
    },
    (accessToken, refreshToken, profile, done) =>
      newUser(accessToken, refreshToken, profile, done)
        .then((res) => console.debug(`send to success/fail:  res: ${res}`))
        .catch((err) => console.debug(err))
  )
); // END GoogleStrategy

module.exports = { googleClientId, googleClientSecret, db, google };
