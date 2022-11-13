const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUserByID,
  updateUserByID
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/register", addUser);
router.delete("/:id", deleteUserByID);
router.patch("/:id", updateUserByID);

module.exports = router;
