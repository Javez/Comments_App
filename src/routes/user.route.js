const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.post("/addUser", UserController.addUser());
router.get("/getUserById/:userId", UserController.getUser());
router.get("/getAllUsers", UserController.getUsers);

export default router
