var express = require("express");
const knexfile = require("../knexfile");
var router = express.Router();
// const knex = require("knex")(require("../knexfile").development);
const User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.fetchAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => res.status(400).json({ message: "Error getting users" }));

  // knex
  //   .select("*")
  //   .from("users")
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => res.send("Error getting users"));
});

module.exports = router;
