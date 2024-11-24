const routes = require("express").Router();

const Post = require("../data/post");

routes.get("/", (req, res) => {
  res.send("Database");
});

// routes.post("/", (req, res) => {
//   console.log(req.body, "index thing??");
// });

routes.use("/users", require("./users"));

module.exports = routes;
