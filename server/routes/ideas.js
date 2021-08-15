var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
// const knex = require("knex")(require("../knexfile").development);
// const Idea = require("../models/idea");

/* GET home page. */
router.get("/", function (req, res, next) {
  // knex
  //   .select("*")
  //   .from("ideas")
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => res.send("Error getting ideas"));
  res.send({ id: 1 });
});

router.post("/");

module.exports = router;
