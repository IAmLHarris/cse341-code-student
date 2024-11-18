const express = require("express");
const router = express.Router();
const Post = require("../data/post");

const usersController = require("../controllers/users");

// display things
router.get("/", usersController.getAll);
router.get("/:id", usersController.getSingle);

// change things
router.post("/", (req, res) => {
  const post = new Post({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ dangit: err });
    });
});

module.exports = router;
