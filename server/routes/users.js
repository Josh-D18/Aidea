var express = require("express");
const knexfile = require("../knexfile");
const authorize = require("../middleware/authorize");
var router = express.Router();
// const knex = require("knex")(require("../knexfile").development);
const User = require("../models/user");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   User.fetchAll()
//     .then((users) => {
//       res.status(200).json(users);
//     })
//     .catch(() => res.status(400).json({ message: "Error getting users" }));

//   //   // knex
//   //   //   .select("*")
//   //   //   .from("users")
//   //   //   .then((data) => {
//   //   //     res.json(data);
//   //   //   })
//   //   //   .catch((err) => res.send("Error getting users"));
// });

router.get("/:id", authorize, (req, res) => {
  User.where({ id: req.params.id })
    .fetch({ withRelated: ["idea"] })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() =>
      res.status(400).json({ message: `Error getting user ${req.params.id}` })
    );
});

router.get("/user/:id", authorize, (req, res) => {
  const tokenId = req.decoded;

  User.where({ user_name: tokenId.username })
    .fetch({ withRelated: ["idea"] })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() =>
      res.status(400).json({ message: `Error getting user ${req.params.id}` })
    );

  // try {
  //   console.log(tokenId);
  // } catch (err) {
  //   res.status(400).json({ message: `Error getting user ${req.params.id}` });
  // }
});

// router.get("/token/:id", authorize, (req, res) => {
//   const tokenId = req.decoded;
//   User.where({ id: req.params.id })
//     .fetch({ withRelated: ["idea"] })
//     .then((user) => {
//       console.log(req.user.id);
//       res.status(200).json({ user, tokenId });
//     })
//     .catch(() =>
//       res.status(400).json({ message: `Error getting user ${req.params.id}` })
//     );
// });

module.exports = router;
