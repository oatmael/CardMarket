require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Load input validation
// Load User model
const User = require("../../../models/User");
const passport = require("passport");

// @route POST api/admin/users
// @desc Get list of users
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.role !== 1) {
      return res
        .status(401)
        .json({ error: "You don't have access to this route." });
    }
    const users = User.find({}, "-password", (err, users) => {
      return res.json(users);
    });
  }
);
module.exports = router;
