const express = require("express");
const router = express.Router();
const { createUser, login, logout } = require("../controllers/userController");
const { authGuard } = require("../middlewares/auth");

//user activities
router.post("/signup", createUser);

router.post("/login", login);

router.post("/logout", authGuard, logout);

module.exports = router;
