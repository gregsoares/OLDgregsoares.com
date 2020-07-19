const express = require("express");
const passport = require("passport");
const router = express.Router();
require("../controllers/userController");

// Initial 'get user code' route (login)
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Route returned by oauth with user's code
router.get(
  "/auth/googleuser",
  passport.authenticate("google"));

module.exports = router;
