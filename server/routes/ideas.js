var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
// const knex = require("knex")(require("../knexfile").development);
const Idea = require("../models/idea");
const authorize = require("../middleware/authorize");

/* GET home page. */
router.get("/", authorize, function (req, res, next) {
  Idea.fetchAll()
    .then((ideas) => {
      res.status(200).json(ideas);
    })
    .catch(() => res.status(400).json({ message: "Error getting ideas" }));

  // knex
  //   .select("*")
  //   .from("ideas")
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => res.send("Error getting ideas"));
});

router.get("/:id", authorize, (req, res) => {
  Idea.where({ id: req.params.id })
    .fetch({ withRelated: ["user"] })
    .then((idea) => {
      res.status(200).json(idea);
    })
    .catch(() =>
      res.status(400).json({ message: `Error getting idea ${req.params.id}` })
    );
});

router.post("/profile/:id", authorize, (req, res) => {
  new Idea({
    idea: req.body.idea,
    description: req.body.description,
    user_id: req.params.id,
  })
    .save()
    .then((newIdea) => {
      res.status(201).json(newIdea);
    })
    .catch(() =>
      res.status(400).json({ message: `Error creating user ${req.body.idea}` })
    );
});

router.put("/:id", authorize, (req, res) => {
  Idea.where({ id: req.params.id })
    .fetch()
    .then((idea) => {
      idea
        .save({
          description: req.body.description,
        })
        .then((updatedIdea) => {
          res.status(200).json(updatedIdea);
        });
    })
    .catch(() =>
      res.status(400).json({ message: `Error updating idea ${req.params.id}` })
    );
});

router.delete("/:id", authorize, (req, res) => {
  Idea.where({ id: req.params.id })
    .destroy()
    .then(() => {
      res.status(200).json({ message: `Deleted idea ${req.params.id}` });
    })
    .catch(() =>
      res.status(400).json({ message: `Error deleting idea ${req.params.id}` })
    );
});

module.exports = router;
