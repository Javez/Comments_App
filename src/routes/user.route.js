import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/addUser", UserController.addUser);
router.get("/getUserById/:userId", UserController.getUser);
router.get("/getAllUsers", UserController.getAllUsers);

export default router;