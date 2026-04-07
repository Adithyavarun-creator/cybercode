const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/UserController");
const { verifyUser } = require("../utils/verifyUser");

const router = express.Router();

// router.get("/api/user");
router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);

module.exports = router;
