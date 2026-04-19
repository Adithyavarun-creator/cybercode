const express = require("express");
const { signup, signin, signOut } = require("../controllers/AuthController");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signOut);

module.exports = router;
