// loads client-side variables that are depedent on env

let googleClientId, googleClientSecret;
if (process.env.PORT) {
  googleClientId = process.env.googleClientID;
  googleClientSecret = process.env.googleClientSecret;
}
else {
  googleClientId = require("../config/keys").googleClientID;
  googleClientSecret = require("../config/keys").googleClientSecret;
}

module.exports = google = {ClientId: googleClientId, ClientSecret: googleClientSecret};