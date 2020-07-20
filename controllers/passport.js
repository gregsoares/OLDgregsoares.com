const passport = require("passport");
const GoogleStategy = require("passport-google-oauth20").Strategy;

let googleClientId, googleClientSecret, db;
if (process.env.PORT) {
  googleClientId = process.env.googleClientID;
  googleClientSecret = process.env.googleClientSecret;
  db = process.env.MONGODB_URI;
} else {
  googleClientId = require("../config/keys").googleClientID;
  googleClientSecret = require("../config/keys").googleClientSecret;
  db = require("../config/keys").devURI;
}

const google = passport.use(
  new GoogleStategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/user/auth/googleuser",
    },
    (accessToken, refreshToken, profile, done) => {
      console.debug(`\n
    accessToken: ${accessToken}
    refreshToken: ${refreshToken} \n
    Profile Info: 
     \tFull name: ${profile.name.givenName} ${profile.name.familyName}
     \tEmail: ${profile.emails[0].value} 
     \tPhoto URL: ${profile.photos[0].value}
    \n `);
      done();
    }
  )
);

module.exports = { googleClientId, googleClientId, db, google}