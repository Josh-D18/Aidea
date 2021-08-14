var express = require("express");
const knexfile = require("../knexfile");
var router = express.Router();
const knex = require("knex")(require("../knexfile").development);
/* GET users listing. */
router.get("/", function (req, res, next) {
  knex
    .select("*")
    .from("users")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.send("Error getting users"));
});

module.exports = router;
