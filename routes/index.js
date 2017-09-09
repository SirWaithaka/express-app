const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get("/", (req, res) => {
  // res.render("index");
  res.send(req.body);
});
router.get("/register", (req, res) => {
  res.send("Registration page");
});
router.post("/register", Controller.users.add);
router.get("/login");

module.exports = router;
