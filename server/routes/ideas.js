var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const knex = require("knex")(require("../knexfile").development);
/* GET home page. */
router.get("/", function (req, res, next) {
  knex
    .select("*")
    .from("ideas")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.send("Error getting ideas"));
});

router.post("/");

module.exports = router;
