const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Login
router.post("/", async (req, res) => {
  let username = req.body.user_name;
  let password = await req.body.password;

  User.where({ user_name: username })
    .fetch()
    .then((user) => {
      const isMatch = bcrypt.compareSync(password, user.attributes.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign(
        { username: user.attributes.user_name },
        process.env.JWT_SECRET,
        { expiresIn: "4h" }
      );
      res.status(200).json({ user, token });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

module.exports = router;
