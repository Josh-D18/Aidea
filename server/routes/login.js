const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const authorize = require("../middleware/authorize");

// Create New User
router.post("/", (req, res) => {
  let username = req.body.user_name;
  let password = req.body.password;
});

module.exports = router;
