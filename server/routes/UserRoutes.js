const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.get("/getUser/:id", getUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
