const express = require("express");
const router = express.Router();

const spiderController = require("../controllers/spider");

router.get("/", spiderController.recite);

// router.get("/web", spiderController.web);

// router.post("/spider", (req, res) => {
//     res.send("hole in your heart");
//   });

module.exports = router;
