const routes = require("express").Router();

const Post = require("../data/post");

routes.get("/", (req, res) => {
  res.send("Database :3");
});

// routes.post("/", (req, res) => {
//   console.log(req.body, "index thing??");
// });

routes.use("/users", require("./users"));
routes.use("/spider", require("./spider"));

module.exports = routes;
