require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authorize = require("../middleware/authorize");

// Create New User
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  //   bcrypt.hash(password, 8).then((hashPassword) => {
  //     new User({});
  //   });
  let token = jwt.sign(
    { username: username, password: password },
    process.env.JWT_SECRET
  );
  res.json({ accessToken: token });
  //   if (User.password === password) {
  //     res.json({ token: token });
  //   } else {
  //     res.status(403).send({ token: null });
  //   }
});

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token === null) return res.sendStatus(401);
// }

module.exports = router;
