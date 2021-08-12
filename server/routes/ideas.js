var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

/* GET home page. */
router.get("/ideas", function (req, res, next) {
  res.json({ id: uuidv4(), text: "Build a direcotry app" });
});

router.post("/");

module.exports = router;
