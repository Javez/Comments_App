import express from "express";
import UserController from "../controllers/user.controller.js";
import { addUserValidation } from "../middleware/userValidation.middleware.js";

const router = express.Router();

router.post("/addUser", addUserValidation, UserController.addUser);
router.get("/getUserById/:id", UserController.getUserById);
router.get("/getAllUsers", UserController.getAllUsers);

export default router;
